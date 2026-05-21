// ===================================================================
// STATE
// ===================================================================
const DEFAULT_MODE_ID = 'tutorial';
const STATE = {
  mode: DEFAULT_MODE_ID,
  titleFont: 1,
  bodyFont: 0,
  colorScheme: 7, // index in COLOR_SCHEMES; 7=深海蓝
  customColors: null,
  lineHeight: 1.75,
  paraSpacing: 1.0,
  isMobile: false,
  bg: 'plain'
};

// ===================================================================
// BACKGROUND TEXTURES
// ===================================================================
const BG_TEXTURES = [
  { id:'plain', name:'纯白', css:'#FFFFFF' },
  { id:'grid', name:'浅色格子', css:'linear-gradient(rgba(85,96,115,0.026) 1px, transparent 1px), linear-gradient(90deg, rgba(85,96,115,0.026) 1px, transparent 1px), #FCFCFB', cssBgSize:'18px 18px, 18px 18px' },
  { id:'kraft', name:'牛皮纸', css:'radial-gradient(circle at 20% 30%, rgba(180,160,130,0.06) 1px, transparent 1px), radial-gradient(circle at 60% 70%, rgba(160,140,110,0.05) 1px, transparent 1px), radial-gradient(circle at 80% 20%, rgba(170,150,120,0.04) 1px, transparent 1px), #F5F0E8', cssBgSize:'7px 7px, 11px 11px, 5px 5px' },
  { id:'mint', name:'薄荷清新', css:'repeating-linear-gradient(45deg, transparent, transparent 17px, rgba(60,160,125,0.035) 17px, rgba(60,160,125,0.035) 18px), #F6FCF8' },
  { id:'lavender', name:'薰衣草', css:'radial-gradient(circle, rgba(150,120,200,0.08) 1px, transparent 1px), #F8F5FF', cssBgSize:'18px 18px' },
  { id:'cloud-grid', name:'云蓝微格', css:'linear-gradient(rgba(86,145,180,0.028) 1px, transparent 1px), linear-gradient(90deg, rgba(86,145,180,0.028) 1px, transparent 1px), #F8FCFE', cssBgSize:'20px 20px, 20px 20px' },
  { id:'rose-linen', name:'粉麻布', css:'repeating-linear-gradient(0deg, rgba(124,82,72,0.014) 0 1px, transparent 1px 10px), repeating-linear-gradient(90deg, rgba(124,82,72,0.012) 0 1px, transparent 1px 12px), linear-gradient(135deg, rgba(255,255,255,0.72), rgba(235,216,212,0.22)), #F5ECE9', cssBgSize:'12px 12px, 14px 14px, auto' },
  { id:'confetti-paper', name:'彩点纸', css:'radial-gradient(circle at 9% 18%, rgba(232,112,74,0.16) 0 1px, transparent 1.4px), radial-gradient(circle at 22% 62%, rgba(47,143,190,0.14) 0 1.2px, transparent 1.6px), radial-gradient(circle at 41% 26%, rgba(50,55,62,0.12) 0 0.9px, transparent 1.2px), radial-gradient(circle at 64% 72%, rgba(245,164,122,0.14) 0 1.2px, transparent 1.6px), radial-gradient(circle at 78% 16%, rgba(116,132,150,0.10) 0 1.1px, transparent 1.5px), radial-gradient(circle at 93% 46%, rgba(211,202,118,0.12) 0 0.9px, transparent 1.2px), #FEFEFC', cssBgSize:'130px 130px, 146px 146px, 118px 118px, 154px 154px, 170px 170px, 126px 126px' },
  { id:'ivory-fiber', name:'米白纤维', css:'radial-gradient(ellipse at 18% 22%, rgba(172,132,76,0.045) 0 0.7px, transparent 1.2px), radial-gradient(ellipse at 64% 40%, rgba(155,128,78,0.035) 0 0.7px, transparent 1.2px), repeating-linear-gradient(22deg, transparent 0 24px, rgba(170,150,110,0.010) 24px 25px), #FFFDF7', cssBgSize:'58px 56px, 68px 66px, 42px 42px' },
  { id:'warm-speckle', name:'米色细点', css:'radial-gradient(circle, rgba(115,96,74,0.035) 0 0.55px, transparent 0.9px), radial-gradient(circle, rgba(185,152,118,0.028) 0 0.65px, transparent 1px), linear-gradient(135deg, rgba(255,255,255,0.72), rgba(255,246,239,0.18)), #FFF9F5', cssBgSize:'30px 30px, 48px 48px, auto' }
];

// ===================================================================
// FONT DEFINITIONS
// ===================================================================
const TITLE_FONTS = [
  { name: '阿里巴巴普惠体 Bold', stack: '"Alibaba PuHuiTi","PingFang SC","Microsoft YaHei",sans-serif', weight: 'bold' },
  { name: '思源黑体 Bold', stack: '"Source Han Sans SC","Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif', weight: 'bold' },
  { name: '思源宋体 Bold', stack: '"Source Han Serif SC","Noto Serif SC","STSong","SimSun",serif', weight: 'bold' },
  { name: '苹方 Medium', stack: '"PingFang SC","Microsoft YaHei",sans-serif', weight: '500' },
  { name: '微软雅黑 Bold', stack: '"Microsoft YaHei","PingFang SC",sans-serif', weight: 'bold' },
  { name: '楷体', stack: '"STKaiti","KaiTi","楷体",serif', weight: 'normal' }
];
const BODY_FONTS = [
  { name: '思源黑体 Regular', stack: '"Source Han Sans SC","Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif', weight: 'normal' },
  { name: '苹方 Regular', stack: '"PingFang SC","Microsoft YaHei",sans-serif', weight: 'normal' },
  { name: '思源宋体 Regular', stack: '"Source Han Serif SC","Noto Serif SC","STSong","SimSun",serif', weight: 'normal' },
  { name: '楷体', stack: '"STKaiti","KaiTi","楷体",serif', weight: 'normal' }
];

// ===================================================================
// COLOR SCHEMES
// ===================================================================
const COLOR_SCHEMES = [
  { name:'经典黑白', main:'#2e2e2e', sub:'#f5f5f5', accent:'#1a1a1a', text:'#2e2e2e', bg:'#FFFFFF', gradient:'linear-gradient(135deg,#2e2e2e,#666666)' },
  { name:'科技蓝', main:'#2563EB', sub:'#EFF6FF', accent:'#1D4ED8', text:'#1E293B', bg:'#FFFFFF', gradient:'linear-gradient(135deg,#2563EB,#7C3AED)' },
  { name:'中国红', main:'#DC2626', sub:'#FEF2F2', accent:'#991B1B', text:'#292524', bg:'#FFFFFF', gradient:'linear-gradient(135deg,#DC2626,#F59E0B)' },
  { name:'森林绿', main:'#059669', sub:'#ECFDF5', accent:'#065F46', text:'#1E293B', bg:'#FFFFFF', gradient:'linear-gradient(135deg,#059669,#2DD4BF)' },
  { name:'暖阳橙', main:'#EA580C', sub:'#FFF7ED', accent:'#C2410C', text:'#292524', bg:'#FFFFFF', gradient:'linear-gradient(135deg,#EA580C,#FBBF24)' },
  { name:'优雅紫', main:'#7C3AED', sub:'#F5F3FF', accent:'#5B21B6', text:'#1E1B4B', bg:'#FFFFFF', gradient:'linear-gradient(135deg,#7C3AED,#EC4899)' },
  { name:'马卡龙', main:'#F472B6', sub:'#FDF2F8', accent:'#38BDF8', text:'#475569', bg:'#FFFFFE', gradient:'linear-gradient(135deg,#F472B6,#38BDF8)' },
  { name:'深海蓝', main:'#1E3A5F', sub:'#F0F4F8', accent:'#0F172A', text:'#1E293B', bg:'#FFFFFF', gradient:'linear-gradient(135deg,#1E3A5F,#3B82F6)' },
  { name:'马里奥', main:'#E53935', sub:'#E3F2FD', accent:'#FBC02D', text:'#1F2937', bg:'#FFFFFF', gradient:'linear-gradient(135deg,#E53935 0%,#FBC02D 52%,#43A047 100%)', pipe:'#43A047', sky:'#1E88E5' },
  { name:'手账咖啡', main:'#C8874E', sub:'#FFF6E8', accent:'#A6B68F', text:'#4A3A2A', bg:'#FFFBF4', gradient:'linear-gradient(135deg,#FFF6E8 0%,#DCC8A7 50%,#C8874E 100%)', paper:'#FFF6E8', rose:'#E8B2B8' },
  { name:'线条酒红', main:'#9B174C', sub:'#F7F2F4', accent:'#1F242A', text:'#24272C', bg:'#FFFFFF', gradient:'linear-gradient(135deg,#1F242A 0%,#9B174C 62%,#F7F2F4 100%)' },
  { name:'极简暖黄', main:'#F5A524', sub:'#FFF4D8', accent:'#222831', text:'#24272C', bg:'#FFFFFF', gradient:'linear-gradient(135deg,#222831 0%,#F5A524 65%,#FFF4D8 100%)' },
  { name:'定制家居', main:'#B88963', sub:'#F7EFE8', accent:'#2B2927', text:'#3A3028', bg:'#FFFDFC', gradient:'linear-gradient(135deg,#2B2927 0%,#B88963 58%,#F7EFE8 100%)' },
  { name:'极简花艺', main:'#D8A85E', sub:'#FFF8EA', accent:'#4B4038', text:'#3B342F', bg:'#FFFDF9', gradient:'linear-gradient(135deg,#4B4038 0%,#D8A85E 66%,#FFF8EA 100%)' },
  { name:'青绿极简', main:'#2F7D7A', sub:'#EAF5F2', accent:'#2D3436', text:'#2D3436', bg:'#FFFFFF', gradient:'linear-gradient(135deg,#2D3436 0%,#2F7D7A 64%,#EAF5F2 100%)' },
  { name:'星夜蓝金', main:'#335FA8', sub:'#EEF4FF', accent:'#D6B93B', text:'#21365C', bg:'#FCFDFF', gradient:'linear-gradient(135deg,#223B78 0%,#335FA8 48%,#D6B93B 100%)' },
  { name:'麦田金青', main:'#D49A1E', sub:'#FFF5CE', accent:'#6FA1A0', text:'#415030', bg:'#FFFDF3', gradient:'linear-gradient(135deg,#6FA1A0 0%,#D49A1E 52%,#FFF5CE 100%)' },
  { name:'绿野油彩', main:'#2F9664', sub:'#EEF9EF', accent:'#69B33A', text:'#2E5339', bg:'#FBFEFA', gradient:'linear-gradient(135deg,#8BCFBE 0%,#69B33A 52%,#2F9664 100%)' },
  { name:'向日葵金', main:'#D99B27', sub:'#FFF1C7', accent:'#9A561F', text:'#4A3625', bg:'#FFFDF4', gradient:'linear-gradient(135deg,#DDBF6D 0%,#D99B27 50%,#9A561F 100%)' },
  { name:'鸢尾蓝绿', main:'#4A5EA4', sub:'#F1F4EA', accent:'#8CAB78', text:'#333F65', bg:'#FBFCF8', gradient:'linear-gradient(135deg,#4A5EA4 0%,#7B8DD0 52%,#8CAB78 100%)' },
  { name:'杏花青蓝', main:'#4E8E96', sub:'#EDF8F6', accent:'#B9C88E', text:'#2F5053', bg:'#FCFEFC', gradient:'linear-gradient(135deg,#6DAFB7 0%,#4E8E96 52%,#B9C88E 100%)' },
  { name:'罗纳河夜', main:'#24537D', sub:'#EDF6FF', accent:'#E3B642', text:'#1B3655', bg:'#FBFCFF', gradient:'linear-gradient(135deg,#24537D 0%,#397DBC 52%,#E3B642 100%)' },
  { name:'晴野蓝麦', main:'#6B9ED6', sub:'#EEF8FC', accent:'#D9AE6A', text:'#2E5368', bg:'#FCFEFF', gradient:'linear-gradient(135deg,#95BED7 0%,#6B9ED6 50%,#D9AE6A 100%)' }
];

// ===================================================================
// MODE DEFINITIONS
// ===================================================================
const MODES = [
  {
    id:'tutorial', name:'教程干货',
    desc:'黑体 · 结构清晰',
    titleFont:1, bodyFont:0, color:7,
    lineHeight:1.75, paraSpacing:1.0,
    headingStyle:'color-block',
    quoteStyle:'left-bar-gray',
    hrStyle:'numbered'
  },
  {
    id:'deep-read', name:'深度长文',
    desc:'宋体 · 经典阅读',
    titleFont:2, bodyFont:2, color:0,
    lineHeight:2.0, paraSpacing:1.5,
    headingStyle:'center-deco',
    quoteStyle:'italic-quotes',
    hrStyle:'center-short'
  },
  {
    id:'knowledge-blogger', name:'知识博主',
    desc:'深海蓝 · 编号标题',
    titleFont:3, bodyFont:1, color:7,
    lineHeight:2.0, paraSpacing:0.8,
    headingStyle:'numbered-divider',
    quoteStyle:'navy-highlight',
    hrStyle:'none'
  },
  {
    id:'japanese', name:'日系文艺',
    desc:'楷体 · 杏花青蓝',
    titleFont:5, bodyFont:2, color:20,
    lineHeight:2.2, paraSpacing:1.5,
    headingStyle:'small-tag',
    quoteStyle:'dashed-warm',
    hrStyle:'wave'
  },
  {
    id:'sweet', name:'甜系种草',
    desc:'马卡龙 · 彩色活泼',
    titleFont:3, bodyFont:1, color:6,
    lineHeight:1.9, paraSpacing:1.0,
    headingStyle:'gradient-round',
    quoteStyle:'color-border-round',
    hrStyle:'color-wave'
  },
  {
    id:'business', name:'品牌商务',
    desc:'雅黑 · 专业稳重',
    titleFont:4, bodyFont:0, color:0,
    lineHeight:1.75, paraSpacing:1.0,
    headingStyle:'business-card',
    quoteStyle:'gray-bg-bar',
    hrStyle:'double-line'
  },
  {
    id:'mario-theme', name:'马里奥主题',
    desc:'红蓝黄绿 · 游戏感',
    titleFont:1, bodyFont:1, color:8,
    lineHeight:1.9, paraSpacing:1.0,
    headingStyle:'mario-block',
    quoteStyle:'mario-card',
    hrStyle:'mario-coins'
  },
  {
    id:'coffee-journal', name:'轻手账咖啡馆',
    desc:'奶油纸感 · 温柔治愈',
    titleFont:3, bodyFont:1, color:9,
    lineHeight:2.0, paraSpacing:1.15,
    headingStyle:'coffee-label',
    quoteStyle:'coffee-note',
    hrStyle:'coffee-dots'
  }
];

const MODE_META = {
  'tutorial':          { emoji:'📚', color:'#1E3A5F' },
  'deep-read':         { emoji:'🌙', color:'#2e2e2e' },
  'knowledge-blogger': { emoji:'💡', color:'#2563EB' },
  'japanese':          { emoji:'🌸', color:'#4E8E96' },
  'sweet':             { emoji:'🍭', color:'#F472B6' },
  'business':          { emoji:'💼', color:'#374151' },
  'mario-theme':       { emoji:'🍄', color:'#E53935' },
  'coffee-journal':    { emoji:'☕', color:'#C8874E' },
};

// ===================================================================
// DEFAULT CONTENT
// ===================================================================
const DEFAULT_HTML = `<p>这是「意疏的 AI 口袋」公众号排版器 —— 一个纯前端、零后端、自带哆啦A梦风格的写作工作台。${MODES.length} 种排版模式、${COLOR_SCHEMES.length} 套配色、Markdown 直接粘贴自动识别、自动保存草稿、撤销重做、一键复制到公众号 —— 全部在本地完成。</p>
<h2>哆啦A梦三件套</h2>
<p>左上角和工具栏里藏着三个互动元素，欢迎逐一点开试试：</p>
<ul>
<li><strong>🔵 哆啦A梦头像</strong>（左上角）— 戳一下从口袋掏件道具，<em>连点 5/10/15 下有隐藏惊喜</em></li>
<li><strong>🚪 任意门</strong>（顶栏右）— 点一下随机传送一套样式 + 配色 + 背景</li>
<li><strong>👜 哆啦A梦的口袋</strong>（工具栏右，黄色按钮）— 装着引用 / 提示卡片 / 代码块 / 对齐 / 编号标题 / 图片 / 分割线 / 段间空</li>
</ul>
<h2>排版模式一览</h2>
<p>顶部点「样式设置」切换排版模式，每种都是字体 + 配色 + 标题装饰 + 引用卡 + 分割线的完整组合：</p>
<ul>
<li><strong>教程干货</strong> — 渐变色块标题 + 紧凑排版</li>
<li><strong>深度长文</strong> — 居中渐变装饰 + 宋体经典阅读</li>
<li><strong>知识博主</strong> — 渐变编号标题 + 深海蓝卡片</li>
<li><strong>日系文艺</strong> — 侧边渐变条 + 莫兰迪柔和配色</li>
<li><strong>甜系种草</strong> — 渐变胶囊标题 + 粉蓝马卡龙</li>
<li><strong>品牌商务</strong> — 底部渐变条 + 稳重专业</li>
<li><strong>马里奥主题</strong> — 红蓝黄绿主题色 + 金币编号与游戏感卡片</li>
<li><strong>轻手账咖啡馆</strong> — 奶油纸感卡片 + 咖啡棕手账标题</li>
</ul>
<h2>核心功能速览</h2>
<ul>
<li><strong>✨ 预处理</strong>（工具栏左）— 5 种文章类型一键梳理纯文本：保守整理 / 长文分层 / 教程步骤 / 种草清单 / 口播转图文</li>
<li><strong>🎛 设计</strong>（工具栏中）— 插入大型设计组件（开篇引导、章节卡、结尾签名）</li>
<li><strong>📝 结尾</strong>（工具栏右）— 4 种风格的结尾卡片，自动跟随主题色</li>
<li><strong>💬 微信预览</strong>（预览栏右上）— 提前看到「粘到公众号会变什么样」，避免来回切窗口</li>
<li><strong>📋 一键复制到公众号</strong>（右下）— 所有样式自动转内联，公众号后台直接 Ctrl+V</li>
<li><strong>📤 导出</strong>（右下）— 支持 HTML / Markdown / JSON 样式三种导出</li>
</ul>
<blockquote>不用担心写一半丢稿子 —— 编辑器每 5 秒自动存一次，关页面前再存一次，7 天内重新打开会问你要不要恢复。改错了想反悔？按一下 Ctrl+Z 就回到上一步，最多能回退 60 步。</blockquote>
<h3>Markdown 语法支持</h3>
<p>常用 Markdown 全部支持：<strong>加粗</strong>、<em>斜体</em>、标题、引用、列表、代码块。从飞书 / Word / Notion 复制带 Markdown 的内容自动解析。</p>
<pre><code>// 示例代码块\nfunction hello() {\n  console.log('公众号排版，一键搞定');\n}</code></pre>
<hr>
<p>清空这段内容、开始创作吧 —— 写完试试戳一下左上角的哆啦A梦，连点很多下有惊喜。</p>
<div data-ending-block="true" data-theme-component="ending" data-ending-type="3" style="margin-top:2em">
  <div data-ending-type="3" style="background:linear-gradient(135deg, rgba(30,58,95,0.12), rgba(15,23,42,0.05));border-radius:12px;padding:32px;text-align:center;margin:2em 0">
    <div data-theme-role="title" style="font-size:16px;font-weight:600;color:#1E3A5F;margin-bottom:8px">欢迎点赞 · 在看 · 转发</div>
    <div data-theme-role="meta" style="font-size:12px;color:#1E3A5F;opacity:0.52">你的支持是我创作的动力</div>
  </div>
</div>`;
