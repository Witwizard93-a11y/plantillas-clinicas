#!/usr/bin/env python3
"""Genera todos los iconos de la app a partir de un único diseño.

Uso:  python3 scripts/generar-iconos.py
Requiere: pip install cairosvg pillow
"""
from io import BytesIO
from pathlib import Path

import cairosvg
from PIL import Image

RAIZ = Path(__file__).resolve().parent.parent
VERDE = "#1E6B5C"

# Primer plano en una rejilla de 108 unidades (la de los iconos adaptativos de Android).
PRIMER_PLANO = f"""
  <rect x="46" y="30" width="26" height="34" rx="4.5" fill="#8FCBBC"/>
  <rect x="36" y="38" width="26" height="34" rx="4.5" fill="#FFFFFF"/>
  <path d="M42 47.5h14M42 53.5h14M42 59.5h8" stroke="{VERDE}" stroke-width="3.2" stroke-linecap="round" fill="none"/>
  <circle cx="66.5" cy="69.5" r="9.2" fill="#C8EC3F" stroke="{VERDE}" stroke-width="2.6"/>
  <path d="M62.6 69.7l2.7 2.7 5.2-5.3" fill="none" stroke="#1B2600" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
"""


def svg(fondo: str, escala: float) -> str:
    grupo = f'<g transform="translate(54 54) scale({escala}) translate(-54 -54)">{PRIMER_PLANO}</g>'
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 108" width="108" height="108">{fondo}{grupo}</svg>'


REDONDEADO = svg(f'<rect width="108" height="108" rx="24" fill="{VERDE}"/>', 1.32)
A_SANGRE = svg(f'<rect width="108" height="108" fill="{VERDE}"/>', 1.12)
SOLO_PRIMER_PLANO = svg("", 1.0)
FONDO = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 108"><rect width="108" height="108" fill="{VERDE}"/></svg>'


def png(codigo: str, lado: int) -> Image.Image:
    datos = cairosvg.svg2png(bytestring=codigo.encode(), output_width=lado, output_height=lado)
    return Image.open(BytesIO(datos)).convert("RGBA")


def guardar(img: Image.Image, ruta: Path) -> None:
    ruta.parent.mkdir(parents=True, exist_ok=True)
    img.save(ruta)
    print("  ", ruta.relative_to(RAIZ))


def main() -> None:
    iconos = RAIZ / "www" / "icons"
    build = RAIZ / "build"
    assets = RAIZ / "assets"

    # Web / PWA
    (iconos / "favicon.svg").write_text(REDONDEADO, encoding="utf-8")
    guardar(png(REDONDEADO, 192), iconos / "icon-192.png")
    guardar(png(REDONDEADO, 512), iconos / "icon-512.png")
    guardar(png(A_SANGRE, 512), iconos / "maskable-512.png")
    guardar(png(A_SANGRE, 180), iconos / "apple-touch-icon.png")

    # Windows (Electron)
    grande = png(REDONDEADO, 1024)
    guardar(grande, build / "icon.png")
    grande.save(build / "icon.ico", sizes=[(16, 16), (24, 24), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)])
    print("   build/icon.ico")

    # Android (fuentes para @capacitor/assets)
    guardar(png(A_SANGRE, 1024), assets / "icon-only.png")
    guardar(png(SOLO_PRIMER_PLANO, 1024), assets / "icon-foreground.png")
    guardar(png(FONDO, 1024), assets / "icon-background.png")
    for nombre, color in (("splash.png", "#F3F6F5"), ("splash-dark.png", "#0D1413")):
        lienzo = Image.new("RGBA", (2732, 2732), color)
        logo = png(REDONDEADO, 520)
        lienzo.alpha_composite(logo, ((2732 - 520) // 2, (2732 - 520) // 2))
        guardar(lienzo.convert("RGB"), assets / nombre)


if __name__ == "__main__":
    main()
