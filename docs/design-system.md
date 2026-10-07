# Sistema de diseño — Estudio Jurídico Converge

> Fuente de verdad del rediseño. Protocolo: **Brillatech Design Stack**.
> Estado: Etapa 0 ✅ · 0.5 ✅ · 1 ✅ · 2 ✅ · 2.5 ✅ · 2.75 ✅ · 3 ✅ · 4 ⏳ · 5 ✅
> **QA final pendiente** — ver la lista al pie.

---

## Etapa 0 — Brief

| Campo | Valor |
|---|---|
| **Cliente** | Estudio Jurídico Converge — Ignacio Facundo Ruiz |
| **Rubro** | Legal (derecho de familia y patrimonial) |
| **Mercado** | Salta, Argentina. Baja competencia digital en el rubro. |
| **Público** | Personas y familias con un problema jurídico concreto y urgente: una sucesión trabada, una cuota alimentaria impaga, un divorcio, una deuda que no cobran. **No** son clientes corporativos. Llegan con estrés y sin vocabulario técnico. |
| **Tipo de producto** | **Landing** de una sola página + 2 formularios (consulta y pasantías) |
| **Marca previa** | Sí — logo navy `#162054` + cyan `#009FE3`, hoy usado solo en favicon y como marca decorativa al 4% de opacidad |
| **Timeline** | Sin fecha límite |

### Áreas de práctica (6)
Sucesorio · Ejecutivo · Cobro de deudas · Cobro de pagaré · Alimentos · Divorcios

### Alcance del rediseño (decidido)
**Cirugía sobre la base existente**, no rewrite.

- **Se conserva:** lógica de formularios, rate limiting (2 req / 20 min por IP), CAPTCHA, HTML escaping, security headers, integración Resend.
- **Se reescribe:** paleta, tipografía, composición de todas las secciones, sistema de movimiento, copy completo, estados de UI.
- **Se corrige:** self-host de fuentes, Phosphor CDN → `lucide-react`, contraste, meta/og/theme-color, `color-scheme`.

---

## Etapa 0.5 — Dirección de arte

### Referencias del cliente (analizadas en vivo)

| Ref | Qué es | Qué tomamos | Qué descartamos |
|---|---|---|---|
| `petenottage.co.uk` | Ilustración plana lúdica, navy + cyan | La paleta navy + cyan | La ilustración (no va para legal) |
| `divergentes.es` | Neo-brutalist: mono, halftone, blob, badge girando | **Mono como voz tipográfica**, el rigor asimétrico | El color chillón y el tono irreverente |
| `forthetimes.law` | Oscuro + serif, marco con muesca, **rail de índice vertical** | **El rail de índice lateral** (solo el concepto) | Toda su ejecución — ver abajo |
| `gabriela.bar` | Tech/Glass: mono, mesh, partículas, cards fantasma | El **movimiento ambiental lento** | El mesh violeta y el look cripto |

> ⚠️ **`forthetimes.law` verificado en vivo:** renderiza **negro**. A los 9 segundos el hero seguía invisible — el contenido arranca en `opacity: 0` y el reveal no dispara. Es el anti-patrón que el protocolo prohíbe explícitamente ("sin contenido oculto por JS caído"). **Se toma el concepto del rail, jamás su implementación.**

**Señales comunes a las 4:** ninguna es centrada · ninguna usa dorado · 3 de 4 usan monoespaciada como display · las 4 tienen un signature visible · el movimiento que gusta es **ambiental y lento**, no scroll pesado.

### Corrección de rumbo
La dirección **Quiet Luxury** (evaluada primero) quedó **descartada**: no coincide con ninguna referencia del cliente y es el territorio más clonado del rubro legal premium.

### Dirección elegida
## **Editorial / Swiss** — territorio "Expediente Mono"

**Ejes:** Forma dura · Aireado · Quiet · **Flat** · Voz tipográfica **monoespaciada** ⟵ *twist* · Movimiento **ambiental** ⟵ *twist 2* · Limpio · **Grid visible**

Por qué encaja: el rubro legal vive de **documentos, foliado, numeración y orden**. Editorial/Swiss es literalmente esa gramática visual. Y la monoespaciada le da el registro "técnico y preciso" sin caer en el look cripto/IA.

### ⚠️ Clichés prohibidos
1. **Del rubro:** azul frío stock + handshake + señora sonriendo. *(Ya esquivado, no reintroducir.)*
2. **De la versión actual:** negro + dorado + serif de alto contraste = template "estudio jurídico premium". **Se abandona.**

### EL TWIST

**Principal — eje 5 · Voz tipográfica:** `serif display elegante` → **`monoespaciada`**
Editorial/Swiss de manual usa un serif display de alto contraste. Acá va **JetBrains Mono** en display, labels y numeración. Es el eje que rompe el molde, y el que recogen 3 de las 4 referencias.

**Secundario — eje 6 · Movimiento:** `quieto` → **`ambiental`**
Editorial/Swiss es quieto por default. Se le suma **un solo** movimiento de fondo lento y continuo (lo que le gustó de gabriela.bar), sin tocar el resto de la sobriedad.

**El ADN que se mantiene:** mucho aire · flat, cero sombras · separación por **regla de 1px y espacio** · grid visible · sin overshoot (`--ease-spring` **PROHIBIDO** en este proyecto).

### SIGNATURE ELEMENT — "El rail de foliado"

> En la práctica judicial argentina el expediente se **folia**: cada hoja lleva su número correlativo. El sitio se folia.

Un rail vertical fijo sobre el margen izquierdo con las secciones numeradas `01 — 07`. Al hacer scroll, el número de la sección activa se ilumina en cyan y **una regla de 1px se dibuja** de arriba hacia abajo hasta él, marcando la posición — como el margen de un expediente.

- **Es custom y escrito a mano.** No sale de ningún catálogo.
- **Pasa el test de sustitución:** el foliado es específico del rubro jurídico argentino. Ningún otro estudio de Salta lo tiene.
- **Mobile:** el rail colapsa a una barra de progreso de 2px en el borde superior, con el número de sección. El signature sobrevive.

### Anatomía — landing

| # | Bloque | Intocable |
|---|---|---|
| 01 | Hero | Titular + **un** CTA legible sobre el fold |
| 02 | Perfil | La foto y el nombre — activo de confianza principal de un estudio unipersonal |
| 03 | Áreas (6) | Los 6 nombres tienen que ser **escaneables**: el usuario busca el suyo |
| 04 | Contacto | El formulario funciona siempre |
| 05 | Prácticas | Secundario, puede ceder protagonismo |
| 06 | Teaser IA | Cierre, sin competir con el CTA principal |
| 07 | Footer | — |
| — | WhatsApp flotante | **Siempre visible**, en toda la página |

> **Regla dura del twist:** el quiebre compositivo vive en el **envoltorio**. Nombre de área, teléfono, botón de WhatsApp y campos del formulario se mantienen ordenados y legibles.

### Dark mode
**Dark-only por diseño.** El navy oscuro *es* la marca. Sin toggle.
→ **Acción Etapa 5:** declarar `color-scheme: dark` en `:root` para que el navegador no fuerce su tema sobre los inputs.

---

## Etapa 1 — Paleta y sistema de tokens ✅

### Territorios evaluados
- **A · Oro Editorial** — negro + dorado + Cormorant con twist compositivo. *Descartado: no coincide con las referencias; territorio saturado.*
- **B · Expediente Mono** — ⭐ **ELEGIDO**
- **C · Señal** — navy + mesh + partículas + cards fantasma, à la gabriela.bar. *Descartado: demasiado tech para una madre buscando abogado de alimentos. **Se reserva como base visual para la Fase 2** (producto jurídico con IA).*

### Decisión de marca
**El dorado se elimina. El acento pasa a ser el cyan `#009FE3` del logo.**
Motivo: hoy la marca es navy `#162054` + cyan `#009FE3` y el sitio es negro + dorado — son dos marcas distintas, y los colores del logo viven únicamente en el favicon. Se reconcilian.

### Tokens congelados

```css
:root {
  color-scheme: dark;

  /* ── Marca ── */
  --brand-navy: #162054;
  --brand-cyan: #009FE3;

  /* ── Fondos (navy, subiendo por capas — nunca negro puro) ── */
  --bg-0: #0B0E1A;   /* base */
  --bg-1: #101425;
  --bg-2: #131829;   /* superficie */
  --bg-3: #1A2036;   /* superficie elevada */

  /* ── Texto ── */
  --text:       #E8EBF2;   /* 16.1:1 sobre bg-0 */
  --text-muted: #9BA3B8;   /*  7.6:1 sobre bg-0 */
  --text-dim:   #757E9B;   /*  4.8:1 sobre bg-0 */

  /* ── Acento ── */
  --accent:      #009FE3;  /*  6.5:1 sobre bg-0 */
  --accent-soft: #4FBDEE;
  --accent-fg:   #04121C;  /* texto sobre relleno cyan */
  --focus-ring:  #009FE3;

  /* ── Líneas (la separación del sistema: regla de 1px, no sombra) ── */
  --line-1: rgba(232,235,242,0.08);  /* divisor sutil */
  --line-2: rgba(232,235,242,0.16);  /* divisor estructural */
  --line-3: rgba(232,235,242,0.28);  /* borde de control */
  --line-accent: rgba(0,159,227,0.40);

  /* ── Semántico ── */
  --success: #4ADE80;
  --danger:  #F87171;

  /* ── Forma: eje duro. Radio casi nulo. ── */
  --r-none: 0px;
  --r-xs:   2px;   /* default del sistema */
  --r-sm:   4px;   /* solo inputs */

  /* ── Elevación: FLAT. No hay sombras en este sistema. ── */
  /* La jerarquía sale de bg-1/2/3 + line-1/2/3 + espacio. */

  /* ── Ritmo espacial (base 8, escala amplia — eje aireado) ── */
  --sp-1: 4px;   --sp-2: 8px;   --sp-3: 16px;  --sp-4: 24px;
  --sp-5: 40px;  --sp-6: 64px;  --sp-7: 96px;  --sp-8: 144px;
  --sp-9: 200px;

  /* ── Trazo ── */
  --stroke: 1px;   /* todo el sistema es de 1px. Sin excepción. */

  /* ── Textura: limpio + grano mínimo ── */
  --grain-opacity: 0.025;  /* ruido SVG sobre bg-0, solo desktop */
}
```

### Contraste — verificado

| Par | Ratio | AA |
|---|---|---|
| `--text` sobre `--bg-0` | 16.1:1 | ✓ |
| `--text-muted` sobre `--bg-0` | 7.6:1 | ✓ |
| `--text-dim` sobre `--bg-0` | 4.8:1 | ✓ |
| `--accent` sobre `--bg-0` | 6.5:1 | ✓ |
| `--focus-ring` sobre `--bg-0` | 6.5:1 | ✓ (mín. 3:1) |

⚠️ **`--line-accent` y `--line-1/2` son decorativos.** Ningún borde de control ni anillo de foco depende de ellos: el foco usa `--focus-ring` sólido de 2px.

### Deuda del sistema anterior (a limpiar en Etapa 5)
- Toda la escala `--gold-*` se **elimina**.
- `--shadow-md/lg/gold/inset` se **eliminan** — el sistema es flat.
- `--fg-4: #5C5A54` (2.87:1, **reprobaba WCAG**) desaparece con la migración.
- `--r-lg: 22px` / `--r-xl: 32px` se eliminan — el radio del sistema es 2px.

---

## Etapa 2 — Tipografía ✅

**Dos familias. Ambas variables, ambas self-hosteadas con `next/font/google`.**

| Rol | Familia | Por qué |
|---|---|---|
| Display · labels · numeración | **JetBrains Mono** (variable) | El twist. Registro técnico y preciso; el ancho fijo hace que la numeración `01—07` del foliado se alinee sola. |
| Body · formularios | **Hanken Grotesk** (variable) | Grotesk sobria y muy legible en párrafo. Mono en body sería ilegible. |

> Se eliminan Cormorant Garamond, Marcellus y Mulish, y con ellas el `@import` de Google CDN de `globals.css:1`.

### Escala fluida (`clamp()`, 320px → 1440px)

```css
:root {
  --step-h1:   clamp(2.25rem, 1.30rem + 4.75vw, 4.25rem);
  --step-h2:   clamp(1.75rem, 1.32rem + 2.15vw, 2.75rem);
  --step-h3:   clamp(1.25rem, 1.11rem + 0.70vw, 1.625rem);
  --step-lead: clamp(1.0625rem, 1.00rem + 0.31vw, 1.25rem);
  --step-body: clamp(1.00rem, 0.97rem + 0.16vw, 1.0625rem);
  --step-sm:   clamp(0.875rem, 0.86rem + 0.08vw, 0.9375rem);
  --step-xs:   0.75rem;  /* labels y foliado — fijo a propósito */
}
```

| Nivel | Familia | Peso | Line-height | Letter-spacing |
|---|---|---|---|---|
| H1 | Mono | 500 | 1.06 | `-0.03em` |
| H2 | Mono | 500 | 1.12 | `-0.02em` |
| H3 | Mono | 500 | 1.25 | `-0.01em` |
| Lead | Grotesk | 300 | 1.6 | `0` |
| Body | Grotesk | 400 | 1.7 | `0` |
| Label / eyebrow | Mono | 500 | 1.4 | `0.18em` UPPER |
| Foliado (`01`) | Mono | 600 | 1 | `0.05em` |

> La mono a tamaño display necesita el interletrado **cerrado en negativo** — sin eso se ve suelta y amateur. En labels chicos en mayúscula se **abre**.

### Performance
- `next/font/google` con `display: 'swap'` → sin CLS, sin depender del CDN.
- 2 familias × variable = **2 archivos**.
- **Además:** eliminar las **2 hojas completas de Phosphor** por jsDelivr (`layout.tsx:13-20`) → migrar a `lucide-react`, que tree-shakea solo los 6 íconos usados.

---

## Etapa 2.5 — Sistema de movimiento ✅

### Tier elegido: **T1 · CSS-only**

Contra el default de la agencia (T2), y a propósito:

1. El cliente pidió explícitamente **"algún movimiento simple"**.
2. Su queja concreta sobre `forthetimes.law` fue **"anda re lenta y es horrible en fluidez"**. Meter GSAP + Lenis es correr hacia ese problema.
3. T1 son **0 KB de JS**, lo que protege el LCP directamente.
4. El gesto de firma (rail de foliado) se resuelve entero con `animation-timeline: scroll()` + `IntersectionObserver`.

**Stack:** `animation-timeline: scroll()/view()` · `@starting-style` · View Transitions API · `IntersectionObserver` como fallback donde no haya scroll-driven animations.

### Tokens congelados

```css
:root {
  /* Duración — en uso real: 3 (quick, base, slow) */
  --dur-instant: 120ms;
  --dur-quick:   240ms;   /* hover, focus */
  --dur-base:    400ms;   /* entrada de elemento */
  --dur-slow:    700ms;   /* reveal de sección */

  /* Easing — en uso real: 2. --ease-spring NO EXISTE en este proyecto. */
  --ease-out:   cubic-bezier(.25, .46, .45, .94);  /* responde al usuario */
  --ease-inout: cubic-bezier(.60, .00, .25, 1.0);  /* movimiento autónomo */

  --stagger: 60ms;
  --travel:  20px;   /* los reveals SUBEN: "esto llegó" */
}
```

### Gesto de firma — el rail de foliado
La regla de 1px del rail se **dibuja** (`scaleY` con `transform-origin: top`) siguiendo el scroll, y el número de la sección activa transiciona a `--accent` en `--dur-quick`. Un solo gesto, repetido con disciplina en las 7 secciones.

### Los tres "gratis"
1. **Preloader de máscara** — el logo en SVG con `clip-path` que se abre. Máx. `--dur-slow`.
2. **Transición de ruta** — View Transitions (para `/consulta`, Fase 2).
3. **Reveal al scroll** — consistente: `opacity 0→1` + `translateY(20px)→0`, stagger de 60ms entre hermanos. **Siempre hacia arriba.**

### Movimiento ambiental (el twist)
**Uno solo:** un gradiente radial navy→cyan muy tenue que se desplaza en loop de ~24s detrás del hero. `transform` puro. Se apaga en mobile y en `reduced-motion`.

### Presupuesto y accesibilidad — no negociable
- Solo se anima `transform`, `opacity`, `filter`, `clip-path`. **Nunca** `width/height/top/left/margin`.
- `prefers-reduced-motion: reduce` → todo degrada a fade de `--dur-quick`; el ambiental se **apaga**; el rail queda estático marcando la sección. **Mismo commit que la animación.**
- Reveals arrancan en `opacity: 0` **solo** con la clase `js-loaded` en `<html>`. Si el JS cae, el contenido se ve. *(Este es exactamente el bug de `forthetimes.law`.)*
- Máximo **2 animaciones simultáneas** en mobile.
- Ninguna animación supera **1200ms**.
- 60fps medido con throttling 4×, no estimado.

---

## Etapa 2.75 — Voz y copy ✅

### Los 4 ejes de voz

| Eje | Posición | Por qué |
|---|---|---|
| gracioso ↔ **serio** | **8/10 serio** | La gente llega por una muerte, un divorcio o una deuda. El humor no tiene lugar. |
| formal ↔ **casual** | **6/10 casual** | **Tuteo** siempre ("tu caso", "contanos"). Nunca "usted", nunca latín sin traducir. |
| **respetuoso** ↔ irreverente | **9/10 respetuoso** | Rubro emocionalmente sensible. Cero ironía sobre la situación del que lee. |
| entusiasta ↔ **neutral** | **7/10 neutral** | No se vende entusiasmo sobre el problema de otro. La calidez sale de la claridad, no de los signos de exclamación. |

### Decisiones del cliente
- **Primera persona plural** ("contanos", "te respondemos"). *Se le señaló que el singular es más honesto para un estudio unipersonal y convierte el tamaño en ventaja; eligió plural. Decisión suya, se respeta.* → **Mitigación:** el plural se sostiene con especificidad, nunca con vaguedad corporativa. Prohibido "acompañamos a personas y familias".
- **Menos de 3 años de ejercicio** → **cero cifras en todo el sitio.** Ni años, ni cantidad de casos, ni porcentajes de éxito. La autoridad se construye con **precisión sobre el proceso**: quien explica exactamente cómo funciona una sucesión demuestra que la hizo.

### Vocabulario prohibido
`soluciones integrales` · `asesoramiento integral` · `excelencia` · `compromiso y profesionalismo` · `equipo altamente capacitado` · `trayectoria` · `potenciar` · `desbloquear` · `revolucionar` · `tu aliado estratégico` · `quedate tranquilo` · `no dudes en contactarnos`

---

### 01 · HERO

```
01 — SALTA · ARGENTINA

Una sucesión que no avanza.
Una cuota que no llega.
Un pagaré que nadie paga.

──────────

En la primera reunión te decimos tres cosas: si tenés caso,
cuánto cuesta y cuánto puede tardar. Nada más, y nada menos.

[ Contanos tu caso ]        [ WhatsApp ]
```

> **Test de sustitución: pasa.** Cambiar "Converge" por otro estudio no salva el texto, porque el texto no habla del estudio — habla del problema del lector.

### 02 · PERFIL

```
02 — QUIÉN TE ATIENDE

Ignacio Facundo Ruíz
Abogado · Matrícula ⚠️PENDIENTE · Salta

Somos un estudio chico, y lo decimos de frente: tu expediente no es
el número doscientos de una pila. Cuando mandás un mensaje te responde
el abogado que lo lleva, no una secretaria que toma nota.

Trabajamos con una regla: si no podés explicarle a otro en qué estado
está tu juicio, no te lo explicamos bien.
```

⚠️ **Dato faltante:** número de matrícula profesional. No inventar.

### 03 · ÁREAS — índice foliado, sin cajas

Cada entrada nombra **la situación**, no la doctrina. El usuario tiene que reconocerse en la línea.

| Nº | Área | Línea |
|---|---|---|
| 01 | **Sucesiones** | Murió un familiar y quedó una casa, un auto o una cuenta a su nombre. Declaratoria de herederos, partición e inscripción. |
| 02 | **Juicio ejecutivo** | Tenés un documento que ya prueba la deuda. Acá no se discute si te deben: se cobra. |
| 03 | **Cobro de deudas** | Te deben y dejaron de atenderte el teléfono. Primero se intenta el acuerdo; si no, se demanda. |
| 04 | **Pagarés** | Firmaron un pagaré y venció. Es el título más rápido de ejecutar que hay en el código. |
| 05 | **Alimentos** | La cuota no llega, llega tarde o no alcanza. Se puede fijar, aumentar y ejecutar lo que ya se adeuda. |
| 06 | **Divorcios** | Con acuerdo se resuelve en meses. Sin acuerdo también se resuelve, pero conviene saber de antemano en qué te estás metiendo. |

### 04 · CONTACTO

```
04 — CONTACTO

Contanos qué pasó.

Escribí lo que puedas con tus palabras. Si falta algún dato lo
preguntamos nosotros — no hace falta que sepas cómo se llama
tu problema para poder consultarlo.

[ Enviar consulta ]
```

### 05 · PRÁCTICAS PROFESIONALES

```
05 — PRÁCTICAS

Si estás estudiando derecho en Salta.

No es un puesto rentado ni una promesa de trabajo, y preferimos
decirlo antes que después. Es entrar a un expediente real: leerlo,
seguirlo y ver cómo se decide cada paso.

[ Postularme ]
```

### 06 · TEASER IA

```
06 — EN DESARROLLO

Estamos construyendo una herramienta de IA
para estudios jurídicos.

Búsqueda de antecedentes, lectura de documentación y borradores de
escritos. No firma, no decide y no reemplaza al abogado: le saca de
encima las horas que no requieren criterio.

[ Quiero acceso anticipado ]
```

---

### Microcopy por estado

**Formulario de contacto** — la voz es constante, el tono se calibra al estado:

| Estado | Texto |
|---|---|
| Enviando | `Enviando tu consulta…` |
| **Éxito** | `Listo. Te respondemos por mail dentro de las próximas 24 a 48 horas hábiles. Si es urgente, escribinos por WhatsApp.` |
| Error del usuario — campo vacío | `Falta tu email. Sin eso no tenemos cómo responderte.` |
| Error del usuario — CAPTCHA | `Esas letras no coinciden. Probá con las nuevas.` |
| Error del usuario — texto muy largo | `El mensaje es más largo de lo que entra. Contanos lo esencial y el resto lo vemos en la reunión.` |
| **Error del sistema** | `No pudimos enviar tu consulta. Escribinos por WhatsApp al 387 419-9487 y lo resolvemos por ahí.` |
| **Rate limit** (2 req / 20 min) | `Ya recibimos tu consulta. Si necesitás agregar algo, mandanos un WhatsApp.` |

> **Regla:** ningún error termina en un callejón. Todos ofrecen **WhatsApp como salida**. Ningún código técnico crudo llega al usuario.

### Botones — dicen la acción
`Contanos tu caso` · `Enviar consulta` · `Postularme` · `Quiero acceso anticipado`
**Nunca:** `Aceptar` · `Saber más` · `Enviar` · `Ver más`

---

## Etapa 3 — Componentes ✅ (implementados) · ⏳ (QA pendiente)

Se descartó shadcn/ui y Magic UI para este proyecto: el sistema es **flat, de
1px y sin cajas**, y re-estilar shadcn hasta que no se reconozca costaba más que
escribir los cuatro controles que realmente se usan (`.btn`, `.field`, fila de
área, aviso de estado). El signature va a mano, como manda el protocolo.

También se eliminó la dependencia de íconos: las **2 hojas completas de Phosphor
por CDN** (`layout.tsx:13-20`) se reemplazaron por **SVG inline** en los tres
lugares que los necesitaban (flecha de área, refresh del captcha, WhatsApp). No
hizo falta sumar `lucide-react`.

### Estados de UI implementados
Enviando · éxito · error del usuario (captcha) · error del sistema · **rate
limit (429)** — este último no existía antes: el front mostraba "hubo un error"
genérico cuando el rate limiter del backend rechazaba. Todos ofrecen **WhatsApp
como salida**, tienen `role="status"` / `aria-live`, y `.aviso-wrap` reserva el
alto para que no haya layout shift entre estados.

## Etapa 4 — Assets ⏳
Sin assets nuevos. Se reutiliza `logo-white.png` (el `logo-gold.png` quedó
obsoleto con la paleta nueva). **Pendiente:** og-image y matrícula profesional.

## Etapa 5 — Ensamblado ✅ (implementado) · ⏳ (QA pendiente)

### Bugs encontrados y corregidos durante el ensamblado
1. **`overflow-x: hidden` en `body`** convertía al body en su propio contenedor
   de scroll y rompía `window.scrollY` — con eso, el rail de foliado nunca
   avanzaba. Eliminado.
2. **El reveal dejaba el hero en negro al cargar.** El `IntersectionObserver` no
   marcaba lo que ya estaba en pantalla al montar. Era **exactamente el bug de
   `forthetimes.law`** que motivó esta etapa. Corregido: lo visible al montar se
   revela de inmediato, sin depender de que el observer dispare.
3. **La escala tipográfica estaba calculada para una proporcional.** La mono
   avanza ~0.6em por carácter y el H1 se desbordaba a 4 líneas. Escala reducida
   (`--step-h1` máx. 3.25rem) e indent del escalonado bajado a 1.5ch.
4. **`<head>` manual en el root layout** — Next 16 lo desaconseja explícitamente.
   El script anti-FOUC pasó a ser el primer hijo de `<body>`.
5. **Lint preexistente** en `Captcha.tsx`: `setState` sincrónico dentro de un
   efecto. Resuelto con inicialización perezosa (`useState(makeChallenge)`).

### Verificado
- `next build` limpio · `eslint --max-warnings=0` limpio.
- Hero y **rail de foliado funcionando** en build de producción: numeración
  01–07, sección activa en cyan, regla que se dibuja con el scroll.
- Reveals disparando por sección (no de golpe).

### ⚠️ QA PENDIENTE — no verificado todavía
La sesión de navegador dejó de responder antes de poder recorrer el resto. Falta
mirar con ojos:

- [ ] Perfil, Áreas, Contacto, Prácticas, Teaser IA y Footer en desktop.
- [ ] **Mobile real** (no solo DevTools) — sobre todo que el rail colapse bien a
      la barra de 2px y que el H1 en mono no desborde a 320px.
- [ ] Envío real de ambos formularios (la lógica se preservó, pero no se probó
      end-to-end después del rediseño).
- [ ] `prefers-reduced-motion` activado en el SO.
- [ ] 60fps con throttling 4× · Lighthouse + axe · LCP/INP/CLS.
- [ ] Recorrido por teclado y foco visible.
- [ ] og-image (`app/opengraph-image.tsx`) — planificado, **no creado**.

> ⚠️ **Antes de escribir código:** este repo corre **Next.js 16.2.6**, con breaking changes respecto a versiones anteriores. Leer las guías en `node_modules/next/dist/docs/` antes de tocar `app/` (ver `AGENTS.md`).
