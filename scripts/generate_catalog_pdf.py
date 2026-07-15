#!/usr/bin/env python3
"""Generate the evidence-safe SCOTTCHEN RFQ sourcing catalog."""

from __future__ import annotations

import shutil
from pathlib import Path

from reportlab.lib.colors import Color, HexColor, white
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfgen import canvas
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "scottchen-rfq-sourcing-catalog.pdf"
PUBLIC_COPY = ROOT / "public" / "catalog.pdf"

SITE = "https://www.scottchentools.com"
EMAIL = "sales@scottchentools.com"
UPDATED = "2026-07-15"

W, H = A4
MARGIN = 42

NAVY = HexColor("#0B1220")
NAVY_2 = HexColor("#111C2F")
NAVY_3 = HexColor("#17243A")
INK = HexColor("#172033")
SLATE = HexColor("#536179")
MUTED = HexColor("#7B879D")
LINE = HexColor("#D9E0E9")
PAPER = HexColor("#F6F8FB")
ORANGE = HexColor("#F06424")
ORANGE_LIGHT = HexColor("#FFF0E8")
GREEN = HexColor("#0D7B64")
GREEN_LIGHT = HexColor("#E9F7F3")
BLUE = HexColor("#225BB5")
BLUE_LIGHT = HexColor("#EBF2FF")
AMBER = HexColor("#A75B00")
AMBER_LIGHT = HexColor("#FFF5DE")
PURPLE = HexColor("#7441A6")
PURPLE_LIGHT = HexColor("#F4ECFC")

FONT = "Helvetica"
FONT_BOLD = "Helvetica-Bold"
FONT_CN = "STHeiti"


pdfmetrics.registerFont(TTFont(FONT_CN, "/System/Library/Fonts/STHeiti Medium.ttc", subfontIndex=0))


def para(
    c: canvas.Canvas,
    text: str,
    x: float,
    top: float,
    width: float,
    *,
    font: str = FONT,
    size: float = 9,
    leading: float = 12,
    color=INK,
    bold: bool = False,
    max_height: float = 1000,
) -> float:
    style = ParagraphStyle(
        name="catalog",
        fontName=FONT_BOLD if bold and font == FONT else font,
        fontSize=size,
        leading=leading,
        textColor=color,
        alignment=TA_LEFT,
        spaceAfter=0,
        spaceBefore=0,
        allowWidows=0,
        allowOrphans=0,
    )
    p = Paragraph(text, style)
    _, height = p.wrap(width, max_height)
    p.drawOn(c, x, top - height)
    return top - height


def draw_image_fill(c: canvas.Canvas, path: Path, x: float, y: float, width: float, height: float) -> None:
    from reportlab.lib.utils import ImageReader

    image = ImageReader(str(path))
    iw, ih = image.getSize()
    scale = max(width / iw, height / ih)
    dw, dh = iw * scale, ih * scale
    dx = x + (width - dw) / 2
    dy = y + (height - dh) / 2
    c.saveState()
    clip = c.beginPath()
    clip.rect(x, y, width, height)
    c.clipPath(clip, stroke=0, fill=0)
    c.drawImage(image, dx, dy, dw, dh, mask="auto")
    c.restoreState()


def round_box(c: canvas.Canvas, x: float, y: float, width: float, height: float, fill, stroke=LINE, radius: float = 10) -> None:
    c.setFillColor(fill)
    c.setStrokeColor(stroke)
    c.setLineWidth(0.7)
    c.roundRect(x, y, width, height, radius, stroke=1, fill=1)


def pill(c: canvas.Canvas, label: str, x: float, y: float, fill, color, width: float | None = None) -> float:
    c.setFont(FONT_BOLD, 6.8)
    measured = pdfmetrics.stringWidth(label, FONT_BOLD, 6.8) + 18
    width = width or measured
    c.setFillColor(fill)
    c.roundRect(x, y, width, 18, 9, stroke=0, fill=1)
    c.setFillColor(color)
    c.drawCentredString(x + width / 2, y + 6, label)
    return width


def linked_text(c: canvas.Canvas, label: str, url: str, x: float, y: float, *, size: float = 8.5, color=BLUE, font=FONT_BOLD) -> float:
    c.setFont(font, size)
    c.setFillColor(color)
    c.drawString(x, y, label)
    width = pdfmetrics.stringWidth(label, font, size)
    c.linkURL(url, (x, y - 2, x + width, y + size + 2), relative=0)
    return width


def page_header(c: canvas.Canvas, section: str, page_no: int) -> None:
    c.setFillColor(NAVY)
    c.rect(0, H - 48, W, 48, stroke=0, fill=1)
    c.setFillColor(ORANGE)
    c.rect(0, H - 48, 7, 48, stroke=0, fill=1)
    c.setFont(FONT_BOLD, 9)
    c.setFillColor(white)
    c.drawString(MARGIN, H - 29, "SCOTTCHEN")
    c.setFont(FONT, 7.5)
    c.setFillColor(HexColor("#B9C5D8"))
    c.drawRightString(W - MARGIN, H - 29, section.upper())
    page_footer(c, page_no)


def page_footer(c: canvas.Canvas, page_no: int) -> None:
    c.setStrokeColor(LINE)
    c.setLineWidth(0.5)
    c.line(MARGIN, 30, W - MARGIN, 30)
    c.setFillColor(MUTED)
    c.setFont(FONT, 6.8)
    c.drawString(MARGIN, 18, f"RFQ SOURCING CATALOG  |  {UPDATED}")
    c.drawRightString(W - MARGIN, 18, f"{page_no:02d}  |  {SITE.replace('https://', '')}")


def section_heading(c: canvas.Canvas, kicker: str, title: str, chinese: str, intro: str | None = None) -> float:
    top = H - 77
    c.setFillColor(ORANGE)
    c.setFont(FONT_BOLD, 7.2)
    c.drawString(MARGIN, top, kicker.upper())
    c.setFillColor(INK)
    c.setFont(FONT_BOLD, 24)
    c.drawString(MARGIN, top - 33, title)
    c.setFillColor(SLATE)
    c.setFont(FONT_CN, 10.5)
    c.drawString(MARGIN, top - 51, chinese)
    y = top - 69
    if intro:
        y = para(c, intro, MARGIN, y, W - 2 * MARGIN, size=9.3, leading=13.2, color=SLATE)
    return y - 16


def tiny_number(c: canvas.Canvas, number: int, x: float, y: float, *, fill=ORANGE) -> None:
    c.setFillColor(fill)
    c.circle(x, y, 10, stroke=0, fill=1)
    c.setFillColor(white)
    c.setFont(FONT_BOLD, 7.5)
    c.drawCentredString(x, y - 2.6, f"{number:02d}")


def cover(c: canvas.Canvas) -> None:
    hero = ROOT / "public" / "images" / "hero_abrasives_kit.webp"
    c.setFillColor(NAVY)
    c.rect(0, 0, W, H, stroke=0, fill=1)
    draw_image_fill(c, hero, W * 0.53, 0, W * 0.47, H)
    c.setFillColor(Color(0.04, 0.07, 0.12, alpha=0.22))
    c.rect(W * 0.53, 0, W * 0.47, H, stroke=0, fill=1)
    c.setFillColor(NAVY)
    c.rect(0, 0, W * 0.58, H, stroke=0, fill=1)
    c.setFillColor(ORANGE)
    c.rect(0, 0, 9, H, stroke=0, fill=1)

    c.setFillColor(white)
    c.setFont(FONT_BOLD, 12)
    c.drawString(48, H - 70, "SCOTTCHEN")
    c.setFillColor(HexColor("#AEBED5"))
    c.setFont(FONT, 7.5)
    c.drawString(48, H - 87, "EXACT-SKU ABRASIVE SOURCING")

    c.setFillColor(ORANGE)
    c.rect(48, H - 145, 46, 4, stroke=0, fill=1)
    c.setFillColor(white)
    c.setFont(FONT_BOLD, 34)
    c.drawString(48, H - 195, "RFQ SOURCING")
    c.drawString(48, H - 236, "CATALOG")
    c.setFillColor(HexColor("#AEBED5"))
    c.setFont(FONT_BOLD, 14)
    c.drawString(48, H - 266, "2026 EDITION")
    c.setFillColor(HexColor("#E1E7F0"))
    c.setFont(FONT_CN, 13)
    c.drawString(48, H - 294, "磨料磨具询价采购目录")

    para(
        c,
        "Abrasive, sanding and polishing accessories for exact-SKU sourcing, sample approval and private-label projects.",
        48,
        H - 336,
        264,
        size=10,
        leading=14,
        color=HexColor("#D1DBE9"),
    )

    c.setFillColor(HexColor("#16243A"))
    c.roundRect(48, H - 465, 264, 82, 10, stroke=0, fill=1)
    c.setFillColor(ORANGE)
    c.setFont(FONT_BOLD, 7)
    c.drawString(62, H - 407, "USE THIS AS AN RFQ FRAMEWORK")
    para(
        c,
        "Not a certificate, test report, fixed-term offer, facility claim or customer case. Exact source, evidence and commercial terms are confirmed in dated project documents.",
        62,
        H - 420,
        236,
        size=8.3,
        leading=11.5,
        color=white,
    )

    c.setFillColor(HexColor("#AEBED5"))
    c.setFont(FONT, 8.2)
    c.drawString(48, 103, "SALES")
    linked_text(c, EMAIL, f"mailto:{EMAIL}", 48, 86, size=9.4, color=white)
    linked_text(c, SITE, SITE, 48, 65, size=9.4, color=white)
    c.setFillColor(HexColor("#D7DFEB"))
    c.setFont(FONT, 6.7)
    c.drawString(48, 42, f"Published {UPDATED}  |  English-first bilingual buyer guide")

    c.setFillColor(Color(0.04, 0.07, 0.12, alpha=0.86))
    c.roundRect(W * 0.58, 30, W * 0.37, 56, 8, stroke=0, fill=1)
    para(
        c,
        "Reference product-family image. Exact items, construction and performance must be confirmed by approved sample and dated quotation.",
        W * 0.58 + 12,
        75,
        W * 0.37 - 24,
        size=6.6,
        leading=9,
        color=white,
    )
    c.showPage()


def page_exact_sku(c: canvas.Canvas) -> None:
    page_header(c, "How to use this catalog", 2)
    y = section_heading(
        c,
        "01 / Buying method",
        "Start with the exact SKU",
        "从准确 SKU 开始",
        "A product family is only the starting point. A sourcing decision needs a locked product definition, a disclosed source record and a project-specific evidence and commercial file.",
    )

    cards = [
        (
            "1",
            "PRODUCT DEFINITION",
            "产品定义",
            "Application and work material<br/>Machine, interface and operating conditions<br/>Dimensions, grit, construction and rated use<br/>Target market and packaging format",
            ORANGE_LIGHT,
            ORANGE,
        ),
        (
            "2",
            "SOURCE + QUOTE FILE",
            "来源与报价文件",
            "Contracting entity and source role<br/>Actual facility or outsourced critical process<br/>Approved sample identity and revision<br/>Volume, destination, pack and quote validity",
            BLUE_LIGHT,
            BLUE,
        ),
        (
            "3",
            "EVIDENCE RELEASE",
            "证据放行",
            "Requested standard and market<br/>Issuer, document number and validity<br/>Exact covered SKU or sample identity<br/>Label, warning, traceability and change control",
            GREEN_LIGHT,
            GREEN,
        ),
    ]
    gap = 12
    card_w = (W - 2 * MARGIN - 2 * gap) / 3
    card_h = 228
    for idx, (_, title, cn, body, fill, accent) in enumerate(cards):
        x = MARGIN + idx * (card_w + gap)
        round_box(c, x, y - card_h, card_w, card_h, fill, stroke=accent)
        c.setFillColor(accent)
        c.circle(x + 24, y - 28, 13, stroke=0, fill=1)
        c.setFillColor(white)
        c.setFont(FONT_BOLD, 9)
        c.drawCentredString(x + 24, y - 31, str(idx + 1))
        c.setFillColor(INK)
        c.setFont(FONT_BOLD, 8.4)
        c.drawString(x + 17, y - 61, title)
        c.setFillColor(SLATE)
        c.setFont(FONT_CN, 8.6)
        c.drawString(x + 17, y - 78, cn)
        para(c, body, x + 17, y - 103, card_w - 34, size=8, leading=17, color=SLATE)

    status_y = y - card_h - 26
    c.setFillColor(INK)
    c.setFont(FONT_BOLD, 10.5)
    c.drawString(MARGIN, status_y, "EVIDENCE STATUS AT A GLANCE")
    c.setFillColor(SLATE)
    c.setFont(FONT_CN, 8.5)
    c.drawString(MARGIN + 190, status_y, "证据状态一览")

    statuses = [
        ("PUBLIC", "Brand, website and business email", GREEN_LIGHT, GREEN),
        ("PROJECT FILE", "Quote, specification, approved sample and order records", BLUE_LIGHT, BLUE),
        ("NOT PUBLIC", "Entity, facility, certificates, reports and client-approved cases", AMBER_LIGHT, AMBER),
        ("CONCEPT ONLY", "Clearly labeled AI workflow visuals, never production evidence", PURPLE_LIGHT, PURPLE),
    ]
    box_w = (W - 2 * MARGIN - gap) / 2
    box_h = 65
    for idx, (label, body, fill, accent) in enumerate(statuses):
        col = idx % 2
        row = idx // 2
        x = MARGIN + col * (box_w + gap)
        top = status_y - 18 - row * (box_h + 10)
        round_box(c, x, top - box_h, box_w, box_h, fill, stroke=accent, radius=8)
        pill(c, label, x + 12, top - 28, white, accent)
        para(c, body, x + 94, top - 14, box_w - 106, size=7.5, leading=10, color=INK)

    note_top = status_y - 18 - 2 * (box_h + 10) - 4
    round_box(c, MARGIN, note_top - 50, W - 2 * MARGIN, 50, NAVY_2, stroke=NAVY_2, radius=8)
    c.setFillColor(ORANGE)
    c.rect(MARGIN, note_top - 50, 6, 50, stroke=0, fill=1)
    para(
        c,
        "Current boundary: no downloadable certificate original, exact-SKU test report or client-approved case is claimed in this catalog. Request and verify each item before relying on it.",
        MARGIN + 18,
        note_top - 14,
        W - 2 * MARGIN - 36,
        size=8.1,
        leading=11.2,
        color=white,
    )
    c.showPage()


def page_families(c: canvas.Canvas) -> None:
    page_header(c, "Product-family RFQ map", 3)
    y = section_heading(
        c,
        "02 / Product scope",
        "Product families, not blanket claims",
        "产品族不是统一承诺",
        "Use these families to organize an inquiry. Every offer still needs an exact construction, sample identity, source disclosure and dated quotation.",
    )
    cards = [
        ("BUFFING + POLISHING", "抛光布轮与套装", "Diameter, ply, stitching, bore or interface, compound pairing, work material and operating method.", "01"),
        ("SANDING SHEETS + DISCS", "砂纸片、砂碟与砂纸卷", "Grain, grit system, backing, coat, bond, hole pattern, dimensions, interface and intended use.", "02"),
        ("FLAP DISCS", "百叶片", "Diameter, arbor, grit, cloth source, backing, flap geometry, maximum speed, market and label needs.", "03"),
        ("SANDING BELTS", "砂带", "Length, width, grain, backing, coat, joint type, direction, thickness, machine and tracking conditions.", "04"),
        ("CUT-OFF + BONDED WHEELS", "切割片与固结磨具", "Dimensions, formulation, reinforcement, arbor, maximum speed, work material, target market and evidence request.", "05"),
        ("PRIVATE-LABEL KITS", "私牌组合套装", "Full BOM, source of each component, compatibility, count, pack, instructions, warnings, artwork and barcode data.", "06"),
    ]
    gap_x, gap_y = 14, 13
    card_w = (W - 2 * MARGIN - gap_x) / 2
    card_h = 161
    for idx, (title, cn, body, num) in enumerate(cards):
        col, row = idx % 2, idx // 2
        x = MARGIN + col * (card_w + gap_x)
        top = y - row * (card_h + gap_y)
        round_box(c, x, top - card_h, card_w, card_h, white, stroke=LINE)
        c.setFillColor(NAVY_2)
        c.roundRect(x + 14, top - 41, 35, 26, 6, stroke=0, fill=1)
        c.setFillColor(ORANGE)
        c.setFont(FONT_BOLD, 8.5)
        c.drawCentredString(x + 31.5, top - 32, num)
        c.setFillColor(INK)
        c.setFont(FONT_BOLD, 9)
        c.drawString(x + 60, top - 25, title)
        c.setFillColor(SLATE)
        c.setFont(FONT_CN, 8.5)
        c.drawString(x + 60, top - 42, cn)
        c.setStrokeColor(LINE)
        c.line(x + 14, top - 57, x + card_w - 14, top - 57)
        c.setFillColor(ORANGE)
        c.setFont(FONT_BOLD, 6.8)
        c.drawString(x + 14, top - 75, "RFQ MUST NAME")
        para(c, body, x + 14, top - 88, card_w - 28, size=8, leading=11.5, color=SLATE)

    note_y = y - 3 * (card_h + gap_y) + 4
    round_box(c, MARGIN, note_y - 53, W - 2 * MARGIN, 53, ORANGE_LIGHT, stroke=ORANGE, radius=8)
    para(
        c,
        "A family photo, generic specification or previous order does not release a new SKU. Lock the new drawing or specification, approved sample, evidence scope and change-control revision.",
        MARGIN + 16,
        note_y - 14,
        W - 2 * MARGIN - 32,
        size=8.2,
        leading=11.3,
        color=INK,
    )
    c.showPage()


def page_rfq_sheet(c: canvas.Canvas) -> None:
    page_header(c, "Exact-SKU RFQ worksheet", 4)
    y = section_heading(
        c,
        "03 / RFQ input",
        "Build a quote that can be verified",
        "制作可核验的报价",
        "Send one line per exact SKU. If a field is unknown, mark it for engineering or buyer confirmation instead of assuming a value.",
    )

    rows = [
        ("Exact item", "Product family, internal SKU, drawing or reference sample", "Locked identifier + revision"),
        ("Application", "Work material, process, machine, interface and operating conditions", "Intended-use record"),
        ("Geometry", "Dimensions, grit, bore, hole pattern, count and tolerances", "Approved drawing or specification"),
        ("Construction", "Grain, backing, bond, reinforcement, joint and component BOM", "Material and source map"),
        ("Use + market", "Rated use, target country or channel, requested standard and language", "Evidence and label scope"),
        ("Commercial", "Quantity, cadence, destination, currency, requested Incoterm and timing", "Dated quotation"),
        ("Packaging", "Pack count, dieline, artwork, warnings, barcode data and carton marks", "Signed artwork + release record"),
        ("Evidence", "Entity, facility, report, certificate, batch and traceability request", "Original or authorized project file"),
    ]
    table_x = MARGIN
    widths = [112, 252, W - 2 * MARGIN - 364]
    row_h = 57
    header_h = 36
    table_top = y
    c.setFillColor(NAVY_2)
    c.roundRect(table_x, table_top - header_h, sum(widths), header_h, 7, stroke=0, fill=1)
    headers = ["FIELD / 字段", "BUYER INPUT / 买家输入", "RELEASE RECORD / 放行记录"]
    x = table_x
    for width, header in zip(widths, headers):
        c.setFillColor(white)
        c.setFont(FONT_CN, 7.2)
        c.drawString(x + 10, table_top - 22, header)
        x += width
    for idx, (field, buyer, record) in enumerate(rows):
        top = table_top - header_h - idx * row_h
        fill = white if idx % 2 == 0 else PAPER
        c.setFillColor(fill)
        c.setStrokeColor(LINE)
        c.rect(table_x, top - row_h, sum(widths), row_h, stroke=1, fill=1)
        x = table_x
        for width in widths[:-1]:
            x += width
            c.line(x, top - row_h, x, top)
        c.setFillColor(INK)
        c.setFont(FONT_BOLD, 8)
        c.drawString(table_x + 10, top - 20, field)
        para(c, buyer, table_x + widths[0] + 10, top - 12, widths[1] - 20, size=7.6, leading=10.4, color=SLATE)
        para(c, record, table_x + widths[0] + widths[1] + 10, top - 12, widths[2] - 20, size=7.4, leading=10, color=INK)

    callout_top = table_top - header_h - len(rows) * row_h - 18
    round_box(c, MARGIN, callout_top - 66, W - 2 * MARGIN, 66, AMBER_LIGHT, stroke=AMBER, radius=8)
    pill(c, "DATED QUOTE ONLY", MARGIN + 14, callout_top - 31, white, AMBER)
    para(
        c,
        "MOQ, sample charge, lead time, payment method and Incoterm are not fixed by this catalog. The applicable values must appear on a dated quote for the exact SKU, volume, destination, packaging and evidence scope.",
        MARGIN + 130,
        callout_top - 13,
        W - 2 * MARGIN - 145,
        size=7.7,
        leading=10.4,
        color=INK,
    )
    c.showPage()


def page_trust_center(c: canvas.Canvas) -> None:
    page_header(c, "Buyer trust center", 5)
    y = section_heading(
        c,
        "04 / Evidence routes",
        "Five live due-diligence pages",
        "五个买家尽调页面",
        "These pages separate public facts, project records, missing evidence and concept visuals. Open the English URL shown below; add /zh after the domain for the Chinese version.",
    )
    left_w = 306
    gap = 16
    right_x = MARGIN + left_w + gap
    right_w = W - MARGIN - right_x
    routes = [
        ("Evidence Center", "证据中心", "/evidence-center", "Status register for entity, facility, certificates, reports, order records and cases."),
        ("Product Compliance", "产品合规", "/product-compliance", "Product-family fields to lock before an exact-SKU compliance conclusion."),
        ("Procurement Terms", "采购条款", "/procurement-terms", "Commercial inputs, unknowns and dated-quotation controls."),
        ("Packaging + Private Label", "包装与私牌", "/packaging-private-label", "Dieline, warnings, barcode data, artwork and release workflow."),
        ("Case Evidence Standard", "案例证据标准", "/case-studies", "Minimum fields for a publishable anonymous case; current public status is explicit."),
    ]
    card_h = 91
    for idx, (title, cn, path, body) in enumerate(routes):
        top = y - idx * (card_h + 9)
        round_box(c, MARGIN, top - card_h, left_w, card_h, white, stroke=LINE, radius=8)
        tiny_number(c, idx + 1, MARGIN + 24, top - 24)
        c.setFillColor(INK)
        c.setFont(FONT_BOLD, 8.8)
        c.drawString(MARGIN + 44, top - 19, title)
        c.setFillColor(SLATE)
        c.setFont(FONT_CN, 7.8)
        c.drawString(MARGIN + 44, top - 35, cn)
        para(c, body, MARGIN + 14, top - 51, left_w - 28, size=7.3, leading=9.5, color=SLATE)
        url = SITE + path
        linked_text(c, url.replace("https://", ""), url, MARGIN + 14, top - 78, size=6.8)

    round_box(c, right_x, y - 500, right_w, 500, NAVY_2, stroke=NAVY_2, radius=10)
    c.setFillColor(ORANGE)
    c.setFont(FONT_BOLD, 7)
    c.drawString(right_x + 16, y - 25, "EVIDENCE VERIFICATION GATE")
    c.setFillColor(white)
    c.setFont(FONT_BOLD, 14)
    c.drawString(right_x + 16, y - 49, "Before you rely on a file")
    c.setFillColor(HexColor("#B8C4D7"))
    c.setFont(FONT_CN, 8.6)
    c.drawString(right_x + 16, y - 67, "依赖文件前先完成核验")
    steps = [
        ("Request the original", "or an authorized extract with a verification route."),
        ("Match the entity", "and the actual facility or source relationship."),
        ("Match the exact SKU", "sample identity, construction and standard revision."),
        ("Check validity", "issuer, issue date, expiry and report status."),
        ("Control changes", "record revision, substitution and reassessment trigger."),
    ]
    sy = y - 103
    for idx, (title, body) in enumerate(steps):
        top = sy - idx * 68
        tiny_number(c, idx + 1, right_x + 26, top - 9, fill=ORANGE)
        c.setFillColor(white)
        c.setFont(FONT_BOLD, 8)
        c.drawString(right_x + 45, top - 6, title)
        para(c, body, right_x + 45, top - 17, right_w - 61, size=7.1, leading=9.2, color=HexColor("#B8C4D7"))
    c.setFillColor(HexColor("#22170F"))
    c.roundRect(right_x + 14, y - 484, right_w - 28, 75, 8, stroke=0, fill=1)
    c.setFillColor(ORANGE)
    c.setFont(FONT_BOLD, 7)
    c.drawString(right_x + 27, y - 430, "DO NOT INFER")
    para(
        c,
        "Icons, marketing copy and generic management-system certificates are not exact-SKU product compliance.",
        right_x + 27,
        y - 441,
        right_w - 54,
        size=7.4,
        leading=10.2,
        color=white,
    )
    c.showPage()


def page_terms(c: canvas.Canvas) -> None:
    page_header(c, "Commercial terms", 6)
    y = section_heading(
        c,
        "05 / Dated quotation",
        "Commercial terms that match the project",
        "与项目匹配的商业条款",
        "Terms vary with product construction, quantity, packaging, evidence scope, destination, capacity confirmation and quote date. Use a dated quotation as the controlling commercial record.",
    )
    rows = [
        ("MOQ", "Quote by exact SKU and pack", "Tooling, material lot, artwork, pack-out and source constraints"),
        ("Sample charge", "State unit, tooling, artwork, freight and credit treatment", "Standard sample, custom build and test scope differ"),
        ("Lead time", "Separate sample, approval, material, production and transit windows", "Starts only after the stated approval or payment trigger"),
        ("Payment", "Name method, currency, milestone, beneficiary and bank-charge rule", "Depends on order value, risk review and contracting entity"),
        ("Incoterm", "State Incoterms rule, named place and version", "Destination, freight control and customs responsibility differ"),
        ("Quote validity", "State issue date, expiry, assumptions and change triggers", "Material, freight, exchange rate and scope can change"),
    ]
    table_x = MARGIN
    widths = [82, 205, W - 2 * MARGIN - 287]
    header_h = 38
    row_h = 68
    c.setFillColor(NAVY_2)
    c.roundRect(table_x, y - header_h, sum(widths), header_h, 7, stroke=0, fill=1)
    headers = ["TERM", "DATED QUOTE SHOULD STATE", "WHY IT VARIES"]
    x = table_x
    for width, label in zip(widths, headers):
        c.setFillColor(white)
        c.setFont(FONT_BOLD, 7)
        c.drawString(x + 9, y - 23, label)
        x += width
    for idx, (term, statement, why) in enumerate(rows):
        top = y - header_h - idx * row_h
        fill = white if idx % 2 == 0 else PAPER
        c.setFillColor(fill)
        c.setStrokeColor(LINE)
        c.rect(table_x, top - row_h, sum(widths), row_h, stroke=1, fill=1)
        x = table_x
        for width in widths[:-1]:
            x += width
            c.line(x, top - row_h, x, top)
        c.setFillColor(INK)
        c.setFont(FONT_BOLD, 8.2)
        c.drawString(table_x + 9, top - 21, term)
        para(c, statement, table_x + widths[0] + 9, top - 12, widths[1] - 18, size=7.5, leading=10.3, color=INK)
        para(c, why, table_x + widths[0] + widths[1] + 9, top - 12, widths[2] - 18, size=7.4, leading=10.2, color=SLATE)

    callout_top = y - header_h - len(rows) * row_h - 18
    round_box(c, MARGIN, callout_top - 87, W - 2 * MARGIN, 87, BLUE_LIGHT, stroke=BLUE, radius=8)
    c.setFillColor(BLUE)
    c.setFont(FONT_BOLD, 7)
    c.drawString(MARGIN + 14, callout_top - 20, "CONTROL SET")
    c.setFillColor(INK)
    c.setFont(FONT_BOLD, 11)
    c.drawString(MARGIN + 14, callout_top - 40, "Dated quote + signed specification + approved artwork + contract or PO")
    para(
        c,
        "If these records conflict, stop and resolve the revision, scope and authority before payment or release.",
        MARGIN + 14,
        callout_top - 52,
        W - 2 * MARGIN - 28,
        size=7.8,
        leading=10.5,
        color=SLATE,
    )
    c.showPage()


def page_packaging(c: canvas.Canvas) -> None:
    page_header(c, "Packaging + private label", 7)
    y = section_heading(
        c,
        "06 / Release workflow",
        "Approve the pack before release",
        "放行前批准包装",
        "Packaging is an order-controlled deliverable. Buyer, regulatory, marketplace and supply-chain inputs must be resolved for the exact SKU, pack and destination.",
    )
    image_path = ROOT / "public" / "images" / "oem-abrasive-packaging-concept-v2.jpg"
    image_h = 206
    draw_image_fill(c, image_path, MARGIN, y - image_h, W - 2 * MARGIN, image_h)
    c.setFillColor(Color(0.04, 0.07, 0.12, alpha=0.88))
    c.rect(MARGIN, y - image_h, W - 2 * MARGIN, 42, stroke=0, fill=1)
    c.setFillColor(white)
    c.setFont(FONT_BOLD, 7)
    c.drawString(MARGIN + 12, y - image_h + 26, "AI-GENERATED WORKFLOW CONCEPT")
    c.setFont(FONT, 6.7)
    c.drawString(MARGIN + 12, y - image_h + 12, "Not a production pack, approved artwork, barcode, scan record, facility or customer order.")

    steps = [
        ("01", "BOM + source map", "Lock every component, count, substitution rule and source role."),
        ("02", "Dieline + structure", "Confirm dimensions, material, protection and logistics constraints."),
        ("03", "Copy + warnings", "Buyer and qualified advisers approve market, language and use statements."),
        ("04", "Barcode data", "Buyer or platform supplies authorized GTIN, UPC, EAN or FNSKU data."),
        ("05", "Signed proof", "Approve revision, color reference, placement and responsible signatory."),
        ("06", "Pilot + scan plan", "Define how the physical print, scan and platform match will be checked."),
        ("07", "Pack-out release", "Record SKU, quantity, carton marks, revision, check result and release authority."),
    ]
    start_top = y - image_h - 21
    gap_x, gap_y = 12, 11
    box_w = (W - 2 * MARGIN - gap_x) / 2
    box_h = 73
    for idx, (num, title, body) in enumerate(steps):
        if idx < 6:
            col, row = idx % 2, idx // 2
            x = MARGIN + col * (box_w + gap_x)
            top = start_top - row * (box_h + gap_y)
            width = box_w
        else:
            x = MARGIN
            top = start_top - 3 * (box_h + gap_y)
            width = W - 2 * MARGIN
        round_box(c, x, top - box_h, width, box_h, white, stroke=LINE, radius=8)
        c.setFillColor(ORANGE)
        c.setFont(FONT_BOLD, 8)
        c.drawString(x + 13, top - 22, num)
        c.setFillColor(INK)
        c.setFont(FONT_BOLD, 8.4)
        c.drawString(x + 43, top - 22, title)
        para(c, body, x + 13, top - 35, width - 26, size=7.4, leading=10, color=SLATE)
    c.showPage()


def page_cases(c: canvas.Canvas) -> None:
    page_header(c, "Trial + case evidence", 8)
    y = section_heading(
        c,
        "07 / Honest outcomes",
        "A trial is not a customer case",
        "试样不等于客户案例",
        "No client-approved case evidence is published in this catalog. A capability scenario or internal trial must not be described as a customer project or quantified market result.",
    )
    image_path = ROOT / "public" / "images" / "qc-evidence-planning-concept-v2.jpg"
    left_w = 238
    right_x = MARGIN + left_w + 17
    right_w = W - MARGIN - right_x
    image_h = 265
    draw_image_fill(c, image_path, MARGIN, y - image_h, left_w, image_h)
    c.setFillColor(Color(0.04, 0.07, 0.12, alpha=0.9))
    c.rect(MARGIN, y - image_h, left_w, 48, stroke=0, fill=1)
    para(
        c,
        "AI-generated evidence-planning concept. Not a lab, report, result, facility or order photo.",
        MARGIN + 11,
        y - image_h + 36,
        left_w - 22,
        size=6.8,
        leading=9.2,
        color=white,
    )
    round_box(c, right_x, y - image_h, right_w, image_h, AMBER_LIGHT, stroke=AMBER, radius=9)
    pill(c, "NOT PUBLISHED", right_x + 14, y - 32, white, AMBER)
    c.setFillColor(INK)
    c.setFont(FONT_BOLD, 12)
    c.drawString(right_x + 14, y - 63, "Minimum case evidence")
    c.setFillColor(SLATE)
    c.setFont(FONT_CN, 8.6)
    c.drawString(right_x + 14, y - 80, "可公开案例的最小证据")
    fields = [
        "Country or region and industry",
        "Exact product or SKU and equipment",
        "Procurement difficulty and agreed method",
        "Baseline, test window and sample revision",
        "Timeline, changes and decision points",
        "Quantified result with calculation basis",
        "Client permission and anonymization scope",
    ]
    fy = y - 108
    for idx, field in enumerate(fields):
        c.setFillColor(AMBER)
        c.circle(right_x + 20, fy - idx * 24 + 2, 3, stroke=0, fill=1)
        para(c, field, right_x + 31, fy + 7 - idx * 24, right_w - 45, size=7.6, leading=9.5, color=INK)

    gate_top = y - image_h - 26
    c.setFillColor(INK)
    c.setFont(FONT_BOLD, 11)
    c.drawString(MARGIN, gate_top, "SAMPLE-TO-ORDER GATE")
    c.setFillColor(SLATE)
    c.setFont(FONT_CN, 8.5)
    c.drawString(MARGIN + 148, gate_top, "从样品到订单的放行链")
    steps = ["RFQ", "SAMPLE ID", "BUYER TEST", "REVISION", "SIGNED APPROVAL", "DATED QUOTE", "PO"]
    gap = 6
    box_w = (W - 2 * MARGIN - gap * (len(steps) - 1)) / len(steps)
    for idx, label in enumerate(steps):
        x = MARGIN + idx * (box_w + gap)
        fill = ORANGE if idx in (0, len(steps) - 1) else NAVY_2
        c.setFillColor(fill)
        c.roundRect(x, gate_top - 70, box_w, 48, 7, stroke=0, fill=1)
        c.setFillColor(white)
        c.setFont(FONT_BOLD, 5.8 if len(label) > 10 else 6.7)
        c.drawCentredString(x + box_w / 2, gate_top - 51, label)
    round_box(c, MARGIN, gate_top - 161, W - 2 * MARGIN, 69, GREEN_LIGHT, stroke=GREEN, radius=8)
    c.setFillColor(GREEN)
    c.setFont(FONT_BOLD, 7)
    c.drawString(MARGIN + 14, gate_top - 115, "PUBLISH ONLY WITH PERMISSION")
    para(
        c,
        "If permission or measurable evidence is missing, keep the record private and describe only the RFQ or trial method. Do not invent a country, buyer, result, cycle time or endorsement.",
        MARGIN + 14,
        gate_top - 127,
        W - 2 * MARGIN - 28,
        size=7.8,
        leading=10.6,
        color=INK,
    )
    c.showPage()


def page_contact(c: canvas.Canvas) -> None:
    page_header(c, "Send an RFQ", 9)
    y = section_heading(
        c,
        "08 / Next action",
        "Send a reviewable RFQ",
        "发送可审核的询价资料",
        "The fastest useful response starts with product, application, quantity, destination, packaging and evidence requirements in one reviewable package.",
    )
    left_w = 280
    right_x = MARGIN + left_w + 18
    right_w = W - MARGIN - right_x
    checklist = [
        "One line per exact SKU or reference sample",
        "Application, work material, machine and operating conditions",
        "Dimensions, grit, construction, interface and tolerance",
        "Estimated quantity, cadence, destination and requested timing",
        "Pack count, dieline, artwork, warning and barcode inputs",
        "Required entity, facility, certificate, report or batch evidence",
        "Requested quote currency, Incoterm and validity window",
    ]
    round_box(c, MARGIN, y - 351, left_w, 351, white, stroke=LINE, radius=10)
    c.setFillColor(INK)
    c.setFont(FONT_BOLD, 13)
    c.drawString(MARGIN + 17, y - 27, "RFQ attachment checklist")
    c.setFillColor(SLATE)
    c.setFont(FONT_CN, 8.5)
    c.drawString(MARGIN + 17, y - 45, "询价附件清单")
    cy = y - 77
    for idx, item in enumerate(checklist):
        c.setStrokeColor(ORANGE)
        c.setLineWidth(1)
        c.roundRect(MARGIN + 17, cy - idx * 38 - 7, 13, 13, 3, stroke=1, fill=0)
        para(c, item, MARGIN + 41, cy + 5 - idx * 38, left_w - 58, size=7.6, leading=10, color=INK)

    round_box(c, right_x, y - 351, right_w, 351, NAVY_2, stroke=NAVY_2, radius=10)
    c.setFillColor(ORANGE)
    c.setFont(FONT_BOLD, 7)
    c.drawString(right_x + 17, y - 27, "CONTACT SALES")
    c.setFillColor(white)
    c.setFont(FONT_BOLD, 15)
    c.drawString(right_x + 17, y - 55, "SCOTTCHEN")
    c.setFillColor(HexColor("#B9C5D8"))
    c.setFont(FONT_CN, 8.5)
    c.drawString(right_x + 17, y - 73, "磨料磨具询价支持")
    linked_text(c, EMAIL, f"mailto:{EMAIL}?subject=Exact-SKU%20RFQ", right_x + 17, y - 105, size=9, color=white)
    linked_text(c, SITE, SITE, right_x + 17, y - 131, size=8.3, color=white)
    c.setStrokeColor(HexColor("#34445D"))
    c.line(right_x + 17, y - 152, right_x + right_w - 17, y - 152)
    c.setFillColor(ORANGE)
    c.setFont(FONT_BOLD, 7)
    c.drawString(right_x + 17, y - 174, "BUYER TRUST PAGES")
    links = [
        ("Evidence Center", "/evidence-center"),
        ("Product Compliance", "/product-compliance"),
        ("Procurement Terms", "/procurement-terms"),
        ("Packaging + Private Label", "/packaging-private-label"),
        ("Case Evidence Standard", "/case-studies"),
    ]
    for idx, (label, path) in enumerate(links):
        linked_text(c, label, SITE + path, right_x + 17, y - 198 - idx * 26, size=7.5, color=HexColor("#E1E8F2"), font=FONT_BOLD)
        c.setFillColor(HexColor("#8EA0B8"))
        c.setFont(FONT, 5.9)
        c.drawRightString(right_x + right_w - 17, y - 198 - idx * 26, path)

    boundary_top = y - 384
    round_box(c, MARGIN, boundary_top - 146, W - 2 * MARGIN, 146, ORANGE_LIGHT, stroke=ORANGE, radius=10)
    c.setFillColor(ORANGE)
    c.setFont(FONT_BOLD, 7)
    c.drawString(MARGIN + 16, boundary_top - 22, "DOCUMENT BOUNDARY")
    c.setFillColor(INK)
    c.setFont(FONT_BOLD, 12)
    c.drawString(MARGIN + 16, boundary_top - 46, "Verify before purchase, payment or market release")
    para(
        c,
        "This catalog does not state a certification, test result, facility ownership, production location, fixed commercial term, existing barcode scan record or customer outcome. Each item must be confirmed for the exact SKU in dated project documents issued or approved by the responsible party.",
        MARGIN + 16,
        boundary_top - 62,
        W - 2 * MARGIN - 32,
        size=8.3,
        leading=11.5,
        color=INK,
    )
    c.setFillColor(SLATE)
    c.setFont(FONT_CN, 7.8)
    c.drawString(MARGIN + 16, boundary_top - 127, "本目录用于询价与尽调，不替代准确 SKU 的报价、合同、测试、证书、包装批准或订单记录。")
    c.showPage()


def build() -> None:
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    PUBLIC_COPY.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(OUTPUT), pagesize=A4, pageCompression=1)
    c.setTitle("SCOTTCHEN Exact-SKU RFQ Sourcing Catalog")
    c.setAuthor("SCOTTCHEN")
    c.setSubject("Evidence-safe RFQ guide for abrasive, sanding, polishing and private-label sourcing")
    c.setKeywords("SCOTTCHEN, RFQ, abrasive sourcing, exact SKU, evidence, private label")
    cover(c)
    page_exact_sku(c)
    page_families(c)
    page_rfq_sheet(c)
    page_trust_center(c)
    page_terms(c)
    page_packaging(c)
    page_cases(c)
    page_contact(c)
    c.save()
    shutil.copyfile(OUTPUT, PUBLIC_COPY)
    print(f"Generated {OUTPUT}")
    print(f"Copied {PUBLIC_COPY}")


if __name__ == "__main__":
    build()
