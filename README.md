# CapOwn Pages

CapOwn 的静态产品主页，用于产品介绍和跳转官方管理页面。该仓库不包含服务端逻辑，适合直接部署到 Cloudflare Pages。

## 本地使用

```bash
npm run dev
```

默认访问：

```text
http://localhost:4173
```

## 构建

```bash
npm run build
```

构建产物输出到 `dist/`。

## Cloudflare Pages

推荐配置：

```text
Framework preset: None
Build command: npm run build
Build output directory: dist
Node.js version: 22
```

可选环境变量：

```text
VITE_GITHUB_URL=https://github.com/tappat225/CapOwn
```

“进入管理页面”按钮固定跳转到：

```text
https://dashboard.capown.net
```

## 资产

- `public/capown-relay-hero.png`：为主页生成的主视觉图。
- `public/capown-logo.png`：产品 Logo，用于 favicon、页头和移动端菜单。
- `public/favicon-32.png`、`public/apple-touch-icon.png`、`public/icon-192.png`：由产品 Logo 缩放生成的浏览器图标。
- `public/capown-concept.png`：复用 CapOwn 主仓库概念图。
- `public/capown-readme-hero.png`：复用 CapOwn 主仓库 README 主图。
