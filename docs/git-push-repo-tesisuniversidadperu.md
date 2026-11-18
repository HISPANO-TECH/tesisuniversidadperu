# Push de Tesis Universidad Perú a su repositorio

La carpeta `tesisuniversidadperu/` del monorepo se publica en su propio repositorio con
`git subtree`, que sube **solo esta carpeta** y la deja en la raíz del repo destino.

| Dato            | Valor                                                       |
| --------------- | ----------------------------------------------------------- |
| Carpeta         | `tesisuniversidadperu`                                      |
| Remoto          | `tesisuniversidad`                                          |
| Repositorio     | https://github.com/HISPANO-TECH/tesisuniversidadperu        |
| Rama destino    | `main`                                                      |
| Alias           | `git push-tesisuniversidad`                                 |

> Todos los comandos se ejecutan desde la **raíz del monorepo**.

## Flujo

```bash
# 1. Commit de los cambios del proyecto
git add tesisuniversidadperu
git commit -m "feat(tesisuniversidadperu): descripción del cambio"

# 2. (Opcional) Subir el monorepo
git push origin <tu-rama>

# 3. Subir solo la carpeta a su repo
git push-tesisuniversidad
# = git subtree push --prefix=tesisuniversidadperu tesisuniversidad main
```

Solo viaja lo commiteado. El alias sube la carpeta tal como está en la **rama actual**
(revisa con `git branch --show-current`).

> ⚠️ Nunca uses `git push tesisuniversidad main`: subiría el monorepo entero.

## Configurar en otra PC

```bash
git remote add tesisuniversidad https://github.com/HISPANO-TECH/tesisuniversidadperu.git
git config alias.push-tesisuniversidad "subtree push --prefix=tesisuniversidadperu tesisuniversidad main"
```

## Notas

- `node_modules`, `.next`, `.env*` no se suben (están en `tesisuniversidadperu/.gitignore`).
- No hagas commits directos en GitHub sobre este repo; si ocurre, primero:
  `git subtree pull --prefix=tesisuniversidadperu tesisuniversidad main`.
- Proyecto: Next.js 16 + pnpm + Tailwind CSS 4. Build: `pnpm install && pnpm build`.
