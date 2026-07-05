from pathlib import Path
from shutil import copyfile, rmtree

from reportlab.lib.colors import Color, HexColor, white
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph
from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "scottchen-b2b-catalog.pdf"
PUBLIC = ROOT / "public" / "catalog.pdf"
IMAGES = ROOT / "public" / "images"
CATALOG_ASSETS = ROOT / "tmp" / "pdfs" / "catalog-assets"
B2B_SITE_URL = "https://www.scottchentools.com"
B2B_SITE_LABEL = "www.scottchentools.com"

PAGE_W, PAGE_H = A4
NAVY = HexColor("#070A13")
PANEL = HexColor("#111827")
PANEL_2 = HexColor("#1E293B")
ORANGE = HexColor("#F97316")
ORANGE_DARK = HexColor("#C2410C")
TEXT = HexColor("#E2E8F0")
MUTED = HexColor("#94A3B8")
LINE = HexColor("#334155")

BODY = ParagraphStyle(
    "Body",
    fontName="Helvetica",
    fontSize=9.3,
    leading=13.5,
    textColor=TEXT,
    spaceAfter=6,
)
SMALL = ParagraphStyle(
    "Small",
    parent=BODY,
    fontSize=8.2,
    leading=11.5,
    textColor=MUTED,
)
TITLE = ParagraphStyle(
    "Title",
    fontName="Helvetica-Bold",
    fontSize=25,
    leading=28,
    textColor=white,
)
SECTION = ParagraphStyle(
    "Section",
    fontName="Helvetica-Bold",
    fontSize=15,
    leading=18,
    textColor=white,
)
LABEL = ParagraphStyle(
    "Label",
    fontName="Helvetica-Bold",
    fontSize=8,
    leading=10,
    textColor=ORANGE,
)


def paragraph(c, text, style, x, y_top, width):
    item = Paragraph(text, style)
    _, height = item.wrap(width, PAGE_H)
    item.drawOn(c, x, y_top - height)
    return y_top - height


def draw_image_cover(c, path, x, y, width, height):
    image = ImageReader(str(path))
    source_w, source_h = image.getSize()
    scale = max(width / source_w, height / source_h)
    draw_w = source_w * scale
    draw_h = source_h * scale
    c.drawImage(
        image,
        x - (draw_w - width) / 2,
        y - (draw_h - height) / 2,
        draw_w,
        draw_h,
        preserveAspectRatio=True,
        mask="auto",
    )


def catalog_image(name):
    return CATALOG_ASSETS / f"{name}.jpg"


def prepare_catalog_images():
    CATALOG_ASSETS.mkdir(parents=True, exist_ok=True)
    for name in [
        "hero_abrasives_kit",
        "buffing_wheels",
        "sanding_tools",
        "oem_packaging",
        "quality_inspection",
    ]:
        source = Image.open(IMAGES / f"{name}.webp").convert("RGB")
        source.thumbnail((900, 900), Image.Resampling.LANCZOS)
        source.save(
            catalog_image(name),
            "JPEG",
            quality=78,
            optimize=True,
            progressive=True,
        )


def page_header(c, section, page_number):
    c.setFillColor(NAVY)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    c.setFillColor(ORANGE)
    c.setFont("Helvetica-Bold", 12)
    c.drawString(36, PAGE_H - 34, "SCOTTCHEN")
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 7.5)
    c.drawRightString(PAGE_W - 36, PAGE_H - 32, section.upper())
    c.setStrokeColor(LINE)
    c.line(36, PAGE_H - 44, PAGE_W - 36, PAGE_H - 44)
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 7)
    c.drawString(36, 23, "B2B SURFACE FINISHING ACCESSORIES")
    c.drawRightString(PAGE_W - 36, 23, f"{page_number:02d}")


def section_title(c, eyebrow, title, subtitle, y=PAGE_H - 76):
    y = paragraph(c, eyebrow.upper(), LABEL, 36, y, PAGE_W - 72)
    y = paragraph(c, title, TITLE, 36, y - 7, PAGE_W - 72)
    return paragraph(c, subtitle, SMALL, 36, y - 8, PAGE_W - 72)


def bullet_list(c, items, x, y, width, color=TEXT):
    style = ParagraphStyle(
        "Bullet",
        parent=BODY,
        textColor=color,
        leftIndent=12,
        firstLineIndent=-10,
        bulletIndent=0,
        spaceAfter=4,
    )
    for item in items:
        y = paragraph(c, f"- {item}", style, x, y, width)
    return y


def draw_cover(c):
    c.setFillColor(NAVY)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    draw_image_cover(
        c,
        catalog_image("hero_abrasives_kit"),
        PAGE_W * 0.49,
        0,
        PAGE_W * 0.51,
        PAGE_H,
    )
    c.setFillColor(Color(0.027, 0.039, 0.075, alpha=0.93))
    c.rect(0, 0, PAGE_W * 0.62, PAGE_H, fill=1, stroke=0)
    c.setFillColor(ORANGE)
    c.setFont("Helvetica-Bold", 16)
    c.drawString(42, PAGE_H - 62, "SCOTTCHEN")
    c.setFillColor(ORANGE_DARK)
    c.rect(42, PAGE_H - 95, 168, 18, fill=1, stroke=0)
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 7.5)
    c.drawString(50, PAGE_H - 89, "B2B SOURCING AND PRIVATE LABEL")
    y = paragraph(
        c,
        "Surface Finishing<br/>Accessory Catalog",
        ParagraphStyle(
            "CoverTitle",
            parent=TITLE,
            fontSize=35,
            leading=38,
        ),
        42,
        PAGE_H - 132,
        PAGE_W * 0.5,
    )
    y = paragraph(
        c,
        "Buffing wheels, sanding products, grinding accessories and configurable retail-ready kits.",
        ParagraphStyle(
            "CoverBody",
            parent=BODY,
            fontSize=12,
            leading=17,
            textColor=HexColor("#CBD5E1"),
        ),
        42,
        y - 22,
        PAGE_W * 0.46,
    )
    c.setStrokeColor(LINE)
    c.line(42, y - 32, PAGE_W * 0.52, y - 32)
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 8.5)
    c.drawString(42, y - 54, "GRIND  /  SAND  /  FINISH  /  POLISH")
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 9.5)
    c.drawString(42, 62, B2B_SITE_LABEL)
    c.linkURL(
        B2B_SITE_URL,
        (
            42,
            59,
            42 + stringWidth(B2B_SITE_LABEL, "Helvetica-Bold", 9.5),
            72,
        ),
        relative=0,
    )
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 8)
    c.drawString(42, 47, "sales@scottchentools.com")


def draw_product_families(c):
    page_header(c, "Product Families", 2)
    y = section_title(
        c,
        "Catalog Overview",
        "Two Core Product Families",
        "Configurations are quoted against confirmed dimensions, pack format, target application and order quantity.",
    )
    cards = [
        (
            "Buffing and Polishing",
            catalog_image("buffing_wheels"),
            [
                "Spiral-stitched cotton wheels and loose finishing wheels",
                "Bench grinder and drill-mounted configurations",
                "Compound bars and application-specific polishing kits",
                "Custom bore inserts, wheel density and pack assortments",
            ],
        ),
        (
            "Sanding and Grinding",
            catalog_image("sanding_tools"),
            [
                "Wet/dry sheets, rolls and assorted grit packs",
                "Silicon carbide mesh screens and detail sanding tools",
                "Zirconia fiber discs and heavy stock-removal accessories",
                "Dispenser boxes, retail packs and bulk cartons",
            ],
        ),
    ]
    card_w = (PAGE_W - 84) / 2
    card_h = 470
    for index, (name, image_path, items) in enumerate(cards):
        x = 36 + index * (card_w + 12)
        top = y - 55
        c.setFillColor(PANEL)
        c.roundRect(x, top - card_h, card_w, card_h, 8, fill=1, stroke=0)
        draw_image_cover(c, image_path, x, top - 190, card_w, 190)
        c.setFillColor(Color(0.027, 0.039, 0.075, alpha=0.48))
        c.rect(x, top - 190, card_w, 62, fill=1, stroke=0)
        text_y = paragraph(c, name, SECTION, x + 18, top - 214, card_w - 36)
        text_y = bullet_list(c, items, x + 18, text_y - 13, card_w - 36)
        c.setFillColor(PANEL_2)
        c.roundRect(x + 18, top - card_h + 22, card_w - 36, 42, 5, fill=1, stroke=0)
        c.setFillColor(ORANGE)
        c.setFont("Helvetica-Bold", 8)
        c.drawString(x + 28, top - card_h + 47, "TYPICAL STARTING POINT")
        c.setFillColor(TEXT)
        c.setFont("Helvetica-Bold", 9)
        c.drawString(x + 28, top - card_h + 32, "500 pcs or sets - confirmed per SKU")


def draw_oem(c):
    page_header(c, "OEM and Private Label", 3)
    y = section_title(
        c,
        "Retail Readiness",
        "From Component Selection to Pack-Out",
        "A complete RFQ should define the product configuration and the packaging outcome together.",
    )
    draw_image_cover(c, catalog_image("oem_packaging"), 36, y - 245, 220, 225)
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 6.8)
    c.drawString(36, y - 254, "Illustrative workflow visual; not evidence of a specific facility.")
    x = 278
    y_text = paragraph(c, "Configuration Scope", SECTION, x, y - 8, PAGE_W - x - 36)
    y_text = bullet_list(
        c,
        [
            "Mix product families into workflow-focused accessory kits",
            "Select grit progression, wheel density, shanks and compounds",
            "Choose color box, blister, polybag, dispenser or bulk carton",
            "Apply supplied brand artwork, instructions and barcode assets",
        ],
        x,
        y_text - 12,
        PAGE_W - x - 36,
    )
    y = y - 282
    stages = [
        ("1", "Brief", "Application, dimensions, quantity and destination"),
        ("2", "Sample", "Representative components and pack concept"),
        ("3", "Approval", "Specification, artwork and barcode review"),
        ("4", "Production", "Batch checks and pre-shipment confirmation"),
    ]
    for index, (number, title, detail) in enumerate(stages):
        box_y = y - index * 86
        c.setFillColor(PANEL)
        c.roundRect(36, box_y - 70, PAGE_W - 72, 66, 6, fill=1, stroke=0)
        c.setFillColor(ORANGE_DARK)
        c.circle(63, box_y - 37, 15, fill=1, stroke=0)
        c.setFillColor(white)
        c.setFont("Helvetica-Bold", 10)
        c.drawCentredString(63, box_y - 41, number)
        c.setFillColor(white)
        c.setFont("Helvetica-Bold", 11)
        c.drawString(90, box_y - 29, title)
        c.setFillColor(MUTED)
        c.setFont("Helvetica", 8.6)
        c.drawString(90, box_y - 47, detail)


def draw_quality(c):
    page_header(c, "Quality and Sampling", 4)
    y = section_title(
        c,
        "Buyer Verification",
        "Define Acceptance Before Mass Production",
        "Quality requirements should be tied to the approved sample and written specification for each product.",
    )
    draw_image_cover(c, catalog_image("quality_inspection"), 330, y - 240, PAGE_W - 366, 220)
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 6.8)
    c.drawString(330, y - 249, "Illustrative workflow visual; not a facility claim.")
    left_y = paragraph(c, "Suggested Checks", SECTION, 36, y - 8, 270)
    left_y = bullet_list(
        c,
        [
            "Dimensions, bore fit, wheel runout and visible construction",
            "Ply count, stitch consistency and material density",
            "Grit consistency, backing adhesion and pack assortment",
            "Barcode readability, labels, carton quantity and gross weight",
        ],
        36,
        left_y - 12,
        270,
    )
    y = y - 278
    c.setFillColor(PANEL)
    c.roundRect(36, y - 300, PAGE_W - 72, 285, 8, fill=1, stroke=0)
    y2 = paragraph(c, "Sample Evaluation Record", SECTION, 56, y - 38, PAGE_W - 112)
    rows = [
        ("Application", "Substrate, tool, speed and target finish"),
        ("Test Method", "Cut rate, finish, heat, fit, life and safety observations"),
        ("Acceptance", "Measurable pass/fail result and approved reference sample"),
        ("Mass Production", "Inspection frequency and pre-shipment evidence"),
    ]
    for label, value in rows:
        y2 -= 15
        c.setStrokeColor(LINE)
        c.line(56, y2 - 32, PAGE_W - 56, y2 - 32)
        c.setFillColor(ORANGE)
        c.setFont("Helvetica-Bold", 8)
        c.drawString(56, y2 - 15, label.upper())
        c.setFillColor(TEXT)
        c.setFont("Helvetica", 8.6)
        c.drawString(150, y2 - 15, value)
        y2 -= 36
    paragraph(
        c,
        "Tip: Keep one signed or clearly identified approved sample for comparison with future production lots.",
        SMALL,
        56,
        y - 280,
        PAGE_W - 112,
    )


def draw_rfq(c):
    page_header(c, "RFQ Checklist", 5)
    y = section_title(
        c,
        "Faster Quotations",
        "Information to Include in Your RFQ",
        "Supplying these details reduces clarification rounds and makes supplier quotations easier to compare.",
    )
    columns = [
        (
            "Product",
            [
                "Product family and intended application",
                "Dimensions, bore or shank and material",
                "Grits, ply count or assortment",
                "Pack quantity and required accessories",
            ],
        ),
        (
            "Commercial",
            [
                "Initial quantity and annual estimate",
                "Target market and delivery destination",
                "Required Incoterm and timing",
                "Sample and inspection expectations",
            ],
        ),
        (
            "Branding",
            [
                "Packaging format and artwork status",
                "Barcode type and supplied data",
                "Instruction and warning languages",
                "Master carton and pallet needs",
            ],
        ),
    ]
    col_w = (PAGE_W - 96) / 3
    for index, (title, items) in enumerate(columns):
        x = 36 + index * (col_w + 12)
        c.setFillColor(PANEL)
        c.roundRect(x, y - 282, col_w, 264, 8, fill=1, stroke=0)
        c.setFillColor(ORANGE_DARK)
        c.rect(x, y - 70, col_w, 52, fill=1, stroke=0)
        c.setFillColor(white)
        c.setFont("Helvetica-Bold", 12)
        c.drawString(x + 15, y - 50, title)
        bullet_list(c, items, x + 15, y - 92, col_w - 30)
    y = y - 325
    c.setFillColor(PANEL_2)
    c.roundRect(36, y - 180, PAGE_W - 72, 164, 8, fill=1, stroke=0)
    paragraph(c, "Start a Sourcing Conversation", SECTION, 56, y - 44, PAGE_W - 112)
    paragraph(
        c,
        "Send your target configuration or use the website RFQ form. After submission, drawings, artwork and barcode files can be supplied by replying to the inquiry email.",
        BODY,
        56,
        y - 76,
        PAGE_W - 112,
    )
    c.setFillColor(ORANGE)
    c.setFont("Helvetica-Bold", 11)
    c.drawString(56, y - 129, "sales@scottchentools.com")
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 10)
    website = f"{B2B_SITE_LABEL}/contact"
    c.drawString(56, y - 149, website)
    c.linkURL(
        f"{B2B_SITE_URL}/contact",
        (
            56,
            y - 153,
            56 + stringWidth(website, "Helvetica-Bold", 10),
            y - 139,
        ),
        relative=0,
    )
    c.setStrokeColor(ORANGE)
    c.line(
        56,
        y - 152,
        56 + stringWidth(website, "Helvetica-Bold", 10),
        y - 152,
    )


def build():
    prepare_catalog_images()
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(OUTPUT), pagesize=A4, pageCompression=1)
    c.setTitle("SCOTTCHEN B2B Surface Finishing Accessory Catalog")
    c.setAuthor("SCOTTCHEN")
    c.setSubject("B2B abrasive, sanding and polishing accessory sourcing catalog")
    for draw_page in [
        draw_cover,
        draw_product_families,
        draw_oem,
        draw_quality,
        draw_rfq,
    ]:
        draw_page(c)
        c.showPage()
    c.save()
    copyfile(OUTPUT, PUBLIC)
    rmtree(CATALOG_ASSETS, ignore_errors=True)


if __name__ == "__main__":
    build()
