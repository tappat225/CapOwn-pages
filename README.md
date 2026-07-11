# CapOwn Pages

CapOwn 的静态产品主页，用于产品介绍和跳转官方管理页面。该仓库不包含服务端逻辑，适合部署到 GitHub Pages。

## 本地使用

```bash
npm run dev
```

默认访问：

```text
http://localhost:4321
```

## 构建

```bash
npm run build
```

构建产物输出到 `dist/`。

## GitHub Pages

仓库已配置 GitHub Actions 自动部署：

- Workflow：`.github/workflows/deploy-pages.yml`
- 触发：`master` 分支 push，或手动 `workflow_dispatch`
- Build command：`npm run build`
- Build output directory：`dist`
- Node.js version：`22`
- 自定义域名：`www.capown.net`（见 `public/CNAME`）

### 首次启用步骤

1. 打开仓库 **Settings → Pages**
2. **Source** 选择 **GitHub Actions**
3. 在 **Custom domain** 填入 `www.capown.net`，保存
4. 勾选 **Enforce HTTPS**（DNS 生效后可用）
5. 在域名 DNS 添加 CNAME 记录：

```text
Type:  CNAME
Name:  www
Value: tappat225.github.io
TTL:   自动 / 3600
```

6. push 到 `master`，或在 **Actions** 里手动运行 **Deploy to GitHub Pages**

站点地址：

```text
https://www.capown.net
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
