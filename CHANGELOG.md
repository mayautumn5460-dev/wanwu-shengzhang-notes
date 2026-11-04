# 版本登记 / Version Log

这是「万物生长笔记 / Wanwu Shengzhang Notes」唯一的版本台账。
改代码前先看这里，改完必须登记 —— 目的只有一个：**不让本地、GitHub、线上三处版本错位**。

**唯一权威源**：`wgs-final/index.html`
- `prototypes/原型.html` 是它的**逐字节镜像**，不作为编辑对象。
- `prototypes/_archive/` 存放历史版本与回归测试脚本，不进发布包、不进仓库。

---

## 一、编号规则（三套号，别混）

| 编号 | 位置 | 含义 | 什么时候改 |
|---|---|---|---|
| `V26.x` | `index.html` → `var VER=` | 内部开发迭代号，界面「关于」处显示 | **每次改代码都 +1** |
| `v1.0.x` | GitHub Release 的 tag | 对外发布号，给下载者看 | 每次对外发版 +1 |
| `wgs-vN` | `sw.js` → `var CACHE` | 离线缓存版本号 | **只要改过 index.html 就必须 +1**，否则已加主屏的苹果用户会一直读旧缓存 |
| `wgs_v1` | `index.html` → `var KEY` | 浏览器本地数据键名 | 🔴 改它 = 老数据全部读不到，**除非写了迁移函数，否则永不改** |

对应关系：一个 `V26.x` 可以只停留本地；只有配了 `v1.0.x` tag 和 Release 附件，才算「对外发布」。

## 二、版本记录

| 版本 / tag | 日期 | 一句话 | 主要改动文件 | 状态 |
|---|---|---|---|---|
| V26.0 | 2026-11-04 | 修手机「无分类」不能展开的 bug | index.html | 仅本地原型 |
| V26.1 / `v1.0.0` | 2026-11-04 | 首次开源发布 | 全包 | ✅ GitHub + Release + 线上 |
| V26.2 / `v1.0.1` | 2026-11-04 | 图片转存 IndexedDB | index.html, sw.js, CHANGELOG.md | ✅ GitHub + Release + 线上 |

### V26.2 / `v1.0.1`（2026-11-04）

- 图片从「压缩后 base64 塞进 5MB 的 localStorage 共享池」改为 **IndexedDB 单独存放**；`s.imgs` 里改存 `idb:<key>` 引用（仍是字符串，所以只读数量的地方零改动）。
- 安全底线：**默认关闭、任一步失败自动降级回原路径**；`file://` 双击打开时主动禁用 IDB（本地文件源的行为各家不一致，不赌），守住「双击即用」这个最硬的卖点。
- 老数据 `data:` 图片原样显示，新旧混存无碍；**导出 .json 会把引用还原成图片本体**，因此回滚到旧版本后照样打得开 —— 这是给数据留的后悔药。
- 顺带修：`save()` 空间满时不再静默丢笔记（改为明确提示）、缓存版本 `wgs-v1` → `wgs-v2`、数据页「存在哪」按实际分支显示。
- **AI 链路零改动**：图片仍不进任何 prompt，维持「不识图」规则。
- 验证：`prototypes/_archive/test_idb_layer.js` 用自建假 IndexedDB 跑 8 组场景，**29 passed / 0 failed**（含无痕降级、file:// 禁用、存取往返、落库失败回退、导出还原、导入卡死兜底）；内联脚本 3 块 0 语法错误，`sw.js` 通过 `node --check`。

### V26.1 / `v1.0.0`（2026-11-04）

- 首次推送 GitHub 开源：双许可（AGPLv3 + 商业授权）、中英双语 README、反馈页加 GitHub Issues 入口与「复制全部内容」按钮。
- 仓库 About 描述 / 话题标签、Release `v1.0.0`（附 `index.html` 下载）完成。
- 后续补：中英 README 同步加入「为什么是我，而不是 Obsidian / KnowNote」差异化定位段落。

### V26.0（2026-11-04）

- 修复「水流分类」中「无分类」节点在手机上不能展开、看不到文章名的 bug（补展开三角与文章列表、加大触摸区）。

## 三、每次改版的检查清单（照着走就不会错位）

1. 改 `var VER`；**只要动过 index.html，同步改 `sw.js` 的 `var CACHE`**
2. 在本文件登记新一行 + 简述改动与验证结果
3. 语法校验（Node `vm` 编译内联脚本）+ 跑 `prototypes/_archive/test_idb_layer.js`
4. `cp wgs-final/index.html prototypes/原型.html` 同步镜像；旧版存进 `prototypes/_archive/`
5. 推 GitHub `main` → 新建 Release tag 并上传 `index.html` 附件
6. 覆盖发布 WorkBuddy 在线应用（`wgs-notes` 前缀，链接不变）
7. 回填本表「状态」列

## 四、还原点（后悔药）

| 层 | 位置 | 用途 |
|---|---|---|
| 物理快照 | `prototypes/_archive/index_V26.1_before_idb_20261104.html` | V26.2 改前逐字节副本 |
| 物理快照 | `prototypes/_archive/原型_V26.0_20261104.html` | 主源文件 V26.0 副本 |
| Git 历史 | `wgs-final/.git` | 任意提交可 `git checkout` 取回 |
| 云端 | GitHub 提交历史 + 每个 Release 的 `index.html` 附件 | 任意对外版本可下载 |
| 数据 | 应用内「导出 .json」 | 🔴 **代码能回滚，用户数据不能** —— 这是唯一的数据后悔药 |

> 注意：GitHub 里只有代码，没有用户手机里的笔记。那些数据在每个用户自己的浏览器中，任何平台都碰不到。

## 五、发布通道

| 通道 | 用途 |
|---|---|
| GitHub 仓库 `mayautumn5460-dev/wanwu-shengzhang-notes` | 看源码、提 Issue、fork |
| GitHub Releases 的 `index.html` 附件 | 给不懂 git 的朋友直接下载固定版本 |
| WorkBuddy 在线版（`wgs-notes` 前缀，完整链接含分享码，见发布面板） | 手机浏览器直接打开；苹果用户必须「添加到主屏幕」 |

---

*English summary: This is the single version ledger. `wgs-final/index.html` is the only authoritative source; `prototypes/原型.html` is a byte-identical mirror. Three numbers must stay in sync: internal `VER` (V26.x), public Release tag (v1.0.x), and the Service Worker cache name (`wgs-vN`, bump whenever the HTML changes). Never change the localStorage `KEY` without a data migration. Section 3 is the release checklist; Section 4 lists every rollback point.*
