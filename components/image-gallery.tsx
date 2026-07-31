"use client"

import { useState, useEffect, useCallback, useMemo } from "react"

interface GalleryImage {
  id: number
  src: string
  title: string
  category: string
  description: string
  section: string
  aspect?: "portrait" | "square"
}

const images: GalleryImage[] = [
  {
    id: 1,
    src: "/works/niidor-home.jpg",
    title: "Niidor 品牌旗舰店首页",
    category: "整店视觉",
    section: "亚马逊店铺 · 整店视觉",
    description:
      "Niidor 隐形内衣品牌亚马逊旗舰店首页整体视觉设计。以「Best Seller in Adhesive Bras」为核心，串联品牌 Banner、产品分类、场景视频与品牌故事，统一色调与排版节奏，强化品牌调性并引导转化。",
  },
  {
    id: 9,
    src: "/works/falorda-home.jpg",
    title: "Falorda 品牌旗舰店首页",
    category: "整店视觉",
    section: "亚马逊店铺 · 整店视觉",
    description:
      "Falorda「Redefining Comfort, Shaping Confidence」品牌旗舰店首页。涵盖塑身衣、无痕文胸、内裤三大分类，图文层次分明、品牌故事完整，传递舒适与自信的品牌理念。",
  },
  {
    id: 2,
    src: "/works/niidor-nipple-covers.jpg",
    title: "乳贴分类页 · Nipple Covers",
    category: "分类页",
    section: "亚马逊店铺 · 分类页",
    description:
      "「Unleash Your Natural Self / No Bra, No Limits」乳贴分类页。按圆形、微提、三角、组合套装分区陈列，草地与海边场景模特图搭配产品橱窗，画面清爽统一，突出「无束缚」自然穿着体验。",
  },
  {
    id: 3,
    src: "/works/niidor-fabric-sticky-bra.jpg",
    title: "布艺隐形文胸分类页",
    category: "分类页",
    section: "亚马逊店铺 · 分类页",
    description:
      "Niidor Fabric Series 布艺隐形文胸分类页。海边场景大图配合 Best Seller 产品卡片，统一价格、评分与卖点排版，画面高级连贯，引导用户快速浏览与下单。",
  },
  {
    id: 4,
    src: "/works/niidor-silicone-bra.jpg",
    title: "硅胶隐形文胸分类页",
    category: "分类页",
    section: "亚马逊店铺 · 分类页",
    description:
      "Niidor Silicone Series 硅胶隐形文胸分类页。100% 亲肤硅胶卖点主图搭配多色产品卡片，色调干净统一，突出「隐形、聚拢、贴合任意穿搭」的核心卖点。",
  },
  {
    id: 5,
    src: "/works/niidor-bra-inserts.jpg",
    title: "胸垫插片分类页 · Bra Inserts",
    category: "分类页",
    section: "亚马逊店铺 · 分类页",
    description:
      "「Barely-There Natural Lift」胸垫插片分类页。以「Your Secret Weapon for Seamless Style」为主题，场景与产品图交错排版，呈现秒变穿搭的自然提拉效果。",
  },
  {
    id: 6,
    src: "/works/niidor-spring.jpg",
    title: "春季会员日活动页",
    category: "活动专题",
    section: "亚马逊店铺 · 活动专题",
    description:
      "「Hello Spring / Step Into the New Season」春季会员日活动页。清新绿意花园场景，贴合春日氛围统一品牌视觉，涵盖活动 Banner、分类入口与福利引导，助力大促转化。",
  },
  {
    id: 7,
    src: "/works/niidor-wedding.jpg",
    title: "婚礼系列专题页",
    category: "活动专题",
    section: "亚马逊店铺 · 活动专题",
    description:
      "「Your Dream Dress Deserves the Perfect Secret」婚礼系列专题页。以婚纱唯美场景串联硅胶文胸、磁扣、蕾丝款与乳贴，营造婚礼当天的隐形自信氛围。",
  },
  {
    id: 8,
    src: "/works/niidor-new-arrivals.jpg",
    title: "新品上市专题页 · New Arrivals",
    category: "活动专题",
    section: "亚马逊店铺 · 活动专题",
    description:
      "「Invisible Support Reinvented」2026 新品上市专题页。左右图文交错排版呈现磁扣款、硅胶款等新品，画面简洁高级，突出创新科技与穿着体验。",
  },
  {
    id: 10,
    src: "/works/fabric-bra-detail.jpg",
    title: "布艺文胸产品详情页",
    category: "详情页",
    section: "产品详情页 · A+",
    description:
      "布艺隐形文胸产品详情页设计。以「Soft & Comfortable / Strong Stickiness / Long-lasting Adhesion」六宫格呈现产品卖点，配合材质结构拆解与尺码表，米色调统一高级。修图 / 拍摄 / 排版创意。",
  },
  {
    id: 14,
    src: "/works/thong-white.jpg",
    title: "蕾丝丁字裤详情页 · 白色调",
    category: "详情页",
    section: "产品详情页 · A+",
    description:
      "「Lace Thong Underwear For Women」蕾丝丁字裤详情页（白色调）。以「White — a fresh start every day」为主题，呈现无痕、防走光、优质面料等卖点，配合穿搭建议与尺码表，画面清透高级。",
  },
  {
    id: 15,
    src: "/works/thong-black-white.jpg",
    title: "蕾丝丁字裤详情页 · 黑白调",
    category: "详情页",
    section: "产品详情页 · A+",
    description:
      "蕾丝丁字裤详情页（黑白调）。突出「No visible lines, Say Goodbye To VPL」无痕卖点，含面料成分、软硬弹性指数、洗涤图标与尺码表，黑白高对比排版利落干净。",
  },
  {
    id: 16,
    src: "/works/thong-black-pink.jpg",
    title: "蕾丝丁字裤详情页 · 黑粉调",
    category: "详情页",
    section: "产品详情页 · A+",
    description:
      "蕾丝丁字裤详情页（黑粉调）。以「Seamless & Wedgie-free」为核心，粉黑对比呈现甜酷两种穿搭风格，搭配礼盒场景与尺码信息，风格年轻活力。",
  },
  {
    id: 17,
    src: "/works/thong-black-pink-purple.jpg",
    title: "蕾丝丁字裤详情页 · 黑白粉紫调",
    category: "详情页",
    section: "产品详情页 · A+",
    description:
      "蕾丝丁字裤详情页（黑白粉紫调）。多配色场景整合呈现，突出无痕、四季适穿与理想礼物卖点，紫粉柔和色调统一，画面温柔高级。",
  },
  {
    id: 11,
    src: "/works/fabric-bra-aplus.jpg",
    title: "布艺文胸 A+ 连屏设计",
    category: "橱窗 A+ 连屏",
    section: "橱窗 A+ · 连屏优化",
    description:
      "Niidor Fabric Series 布艺文胸 A+ 页面连屏设计。沉浸式全屏无缝衔接，串联穿戴步骤、环保理念、3D 杯型与场景搭配，米黄色调统一，层次高级耐看。",
  },
  {
    id: 12,
    src: "/works/falorda-seamless-skin.jpg",
    title: "小 U 领无痕文胸橱窗 · 肤色",
    category: "橱窗 A+ 连屏",
    section: "橱窗 A+ · 连屏优化",
    description:
      "Falorda 小 U 领无痕文胸橱窗优化连屏（肤色版）。以「W Jelly Strip & All-Round Support / Full Coverage & Anti-Spill / Widened Wing」分屏呈现核心卖点，画面连贯统一，突出承托与舒适。",
  },
  {
    id: 13,
    src: "/works/falorda-seamless-pink.jpg",
    title: "小 U 领无痕文胸橱窗 · 粉色",
    category: "橱窗 A+ 连屏",
    section: "橱窗 A+ · 连屏优化",
    description:
      "Falorda 小 U 领无痕文胸橱窗优化连屏（粉色版）。与肤色版共用统一版式与卖点结构，通过色调切换适配不同产品配色，保持品牌视觉一致性。",
  },
  {
    id: 18,
    src: "/works/brush-organizer.jpg",
    title: "水晶亚克力化妆刷收纳桶详情页",
    category: "家居百货 · 详情页",
    section: "家居百货 · 详情页 A+",
    description:
      "2 件装水晶切面亚克力化妆刷收纳桶产品详情页。以「Thickened acrylic / High-capacity / Expansion design / Crystal Design」四大卖点分区呈现，配合使用前后对比、梳妆台场景与尺寸标注，画面通透精致，突出高级质感与大容量收纳。",
  },
  {
    id: 19,
    src: "/works/sink-plug.jpg",
    title: "不锈钢弹跳式水槽塞详情页",
    category: "家居百货 · 详情页",
    section: "家居百货 · 详情页 A+",
    description:
      "2 件装不锈钢弹跳式水槽下水器产品详情页。以「Humanized Design」结构爆炸图拆解材质构造，搭配孔径适配说明、防堵篮设计、与竞品对比及四步安装图，工业蓝色调专业清晰，卖点传达完整。",
  },
  {
    id: 20,
    src: "/works/soap-box.jpg",
    title: "便携带盖肥皂盒套装详情页",
    category: "家居百货 · 详情页",
    section: "家居百货 · 详情页 A+",
    description:
      "8 件装（4+4）便携带盖肥皂盒 + 起泡网套装产品详情页。呈现锁扣防漏、沥水凹槽、圆形/椭圆双形态等卖点，配合尺寸标注、洗手场景与差旅收纳场景，蓝橙撞色清新，突出旅行便携属性。",
  },
  {
    id: 21,
    src: "/works/battery-terminal.jpg",
    title: "M8 蓄电池接线端子详情页",
    category: "家居百货 · 详情页",
    section: "家居百货 · 详情页 A+",
    description:
      "2 件装 M8 铜制蓄电池接线端子产品详情页。以正负极标识、锌合金外壳、优质铁螺丝等卖点分区，配合安装步骤、尺寸标注与汽车/游艇/摩托等广泛应用场景，蓝色工业风专业可信。",
  },
  {
    id: 22,
    src: "/works/air-fryer-liner.jpg",
    title: "空气炸锅硅胶垫详情页",
    category: "家居百货 · 详情页",
    section: "家居百货 · 详情页 A+",
    description:
      "3 件装空气炸锅硅胶垫产品详情页。红蓝双色双面可用，突出 -40℃~250℃ 耐温、双侧提手、沥油底部设计等卖点，配合尺寸对比、洗碗机可洗与户外聚餐场景，橙色暖调呈现烹饪食欲感。",
  },
  {
    id: 23,
    src: "/works/mini-calendar.jpg",
    title: "2023 桌面迷你台历详情页",
    category: "家居百货 · 详情页",
    section: "家居百货 · 详情页 A+",
    description:
      "4 本装 2023 桌面迷你翻页台历产品详情页。黑白灰绿四色可选，突出三角底座、金属线圈、易翻页与便携等卖点，配合尺寸标注、圆点贴纸与办公桌面场景，简约清爽有质感。",
  },
  {
    id: 24,
    src: "/works/candle-holder.jpg",
    title: "金属烛台托套装详情页",
    category: "家居百货 · 详情页",
    section: "家居百货 · 详情页 A+",
    description:
      "4 件装黑色金属锥形烛台托套装产品详情页。哑光黑简约造型，突出 2cm 内径、稳���防滑、优质材质等卖点，配合尺寸标注与餐桌、婚礼、下午茶等多种布景场景，营造温馨仪式氛围。",
  },
  {
    id: 25,
    src: "/works/journal-kit.jpg",
    title: "复古文艺手账素材套装详情页",
    category: "家居百货 · 详情页",
    section: "家居百货 · 详情页 A+",
    description:
      "1 盒复古文艺手账素材套装产品详情页。棕调复古风格，完整罗列贴纸、材料纸、口袋、便签、相框、A6 本册等配件清单，配合拼贴成品展示与手持场景，突出丰富配件与文艺质感。",
  },
  {
    id: 26,
    src: "/works/wine-stopper.jpg",
    title: "不锈钢红酒瓶塞详情页",
    category: "家居百货 · 详情页",
    section: "家居百货 · 详情页 A+",
    description:
      "6 件装不锈钢按压式红酒瓶塞产品详情页。以「100% Sealed / Keep Your Wine Fresh」为核心卖点，配合金属按压结构、食品级材质说明、三步使用图、尺寸标注与户外野餐场景，酒红色调高级且富有食欲感。",
  },
  {
    id: 27,
    src: "/works/clothesline.jpg",
    title: "防滑伸缩晾衣绳详情页",
    category: "家居百货 · 详情页",
    section: "家居百货 · 详情页 A+",
    description:
      "4 件装带彩色夹子的防滑伸缩晾衣绳产品详情页。突出定位珠防滑、180cm 可伸缩至 350cm、免打孔悬挂等卖点，配合尺寸标注、有无定位珠对比图与户外/露营/差旅晾晒场景，清新实用。",
  },
  {
    id: 28,
    src: "/works/shower-hooks.jpg",
    title: "不锈钢淋浴门挂钩详情页",
    category: "家居百货 · 详情页",
    section: "家居百货 · 详情页 A+",
    description:
      "4 件装 304 不锈钢淋浴门挂钩 + 透明吸盘挂钩产品详情页。突出防锈耐用、防滑海绵垫、免打孔承重 3kg 等卖点，配合尺寸图、适用/不适用材质说明与浴室、厨房场景，蓝色工业风专业清晰。",
  },
  {
    id: 29,
    src: "/works/reward-stickers.jpg",
    title: "卡通激励贴纸套装详情页",
    category: "家居百货 · 详情页",
    section: "家居百货 · 详情页 A+",
    description:
      "4 卷 2000 枚儿童卡通激励奖励贴纸产品详情页。呈现 32 款可爱动物图案、易撕易贴等卖点，配合课堂举手、亲子互动、礼盒装饰等场景，色彩缤纷活泼，精准贴合教育与亲子人群。",
  },
  {
    id: 30,
    src: "/works/boho-headband.jpg",
    title: "波西米亚弹力发带详情页",
    category: "美妆配饰 · 详情页",
    section: "家居百货 · 详情页 A+",
    description:
      "6 件装波西米亚扭结弹力发带产品详情页。呈现民族条纹、花卉、豹纹等多印花款式，突出扭结设计、柔软透气、可伸缩至 35cm 等卖点，配合尺寸图与洗脸、日常、旅行、跑步、派对、瑜伽等生活场景，自由随性有格调。",
  },
  {
    id: 31,
    src: "/works/hair-clips.jpg",
    title: "水晶一字发夹套装详情页",
    category: "美妆配饰 · 详情页",
    section: "家居百货 · 详情页 A+",
    description:
      "4 件装水晶水钻树叶造型一字发夹产品详情页。清新绿色边框搭配水钻发饰，突出简约优雅设计与尺寸标注，配合新娘、派对、日常盘发等多种造型场景，精致唯美，主打婚礼与宴会人群。",
  },
  {
    id: 32,
    src: "/works/rhinestone-ribbon.jpg",
    title: "水晶水钻装饰丝带详情页",
    category: "美妆配饰 · 详情页",
    section: "家居百货 · 详情页 A+",
    description:
      "4 卷水晶水钻自粘装饰钻带产品详情页。粉调闪耀质感，突出高品质树脂钻、自粘易用、可裁剪等卖点，配合四步使用图、尺寸标注与手机壳、高跟鞋、车饰、香薰等 DIY 美化场景，奢华精致。",
  },
  {
    id: 33,
    src: "/works/christmas-ribbon.jpg",
    title: "圣诞节红绿丝带套装详情页",
    category: "节庆用品 · 详情页",
    section: "家居百货 · 详情页 A+",
    description:
      "6 件装圣诞红绿缎带丝带产品详情页。以圣诞松枝挂饰点缀边框，突出优质涤纶、易塑形、易裁剪、多宽度可选等卖点，配合礼品包装、蝴蝶结、圣诞树与壁炉布景场景，节日氛围浓郁喜庆。",
  },
  {
    id: 34,
    src: "/works/napkin-rings.jpg",
    title: "金色圣诞树餐巾扣详情页",
    category: "节庆用品 · 详情页",
    section: "家居百货 · 详情页 A+",
    description:
      "8 件装金色圣诞树造型金属餐巾扣产品详情页。红绿圣诞边框搭配金色餐巾环，突出圣诞树造型、金属光滑质感与尺寸标注，配合黑金、红白、格纹等多种圣诞餐桌布景场景，精致提升节日仪式感。",
  },
  {
    id: 35,
    src: "/works/test-tubes.jpg",
    title: "带铝盖塑料试��详情页",
    category: "家居���货 · 详情页",
    section: "家居百货 · 详情页 A+",
    description:
      "42 件装带铝盖透明塑料试管套装产品详情页。含试管、牛皮纸标签吊牌、麻绳、清洁刷等配件，突出铝盖密���防漏、食品级材质、高透明度等卖点，配合尺寸标注与糖果、干花、香料收纳及婚礼派对伴手礼场景，清爽实用。",
  },
  {
    id: 36,
    src: "/works/distribution-box.jpg",
    title: "IP65 防水配电箱详情页",
    category: "五金电工 · 详情页",
    section: "家居百货 · 详情页 A+",
    description:
      "HT 8 路位悬挂式防水配电箱产品详情页。突出 IP65 防水防尘、阻燃耐高温、内置导轨支架、PC 透明视窗等卖点，配合尺寸爆炸图、安装配件说明与室内、户外、酒店、工厂、商场等应用场景，蓝色工业风专业严谨。",
  },
  {
    id: 37,
    src: "/works/dread-accessories.jpg",
    title: "脏辫扣发饰套装详情页",
    category: "美妆配饰 · 详情页",
    section: "家居百货 · 详情页 A+",
    description:
      "170 件装脏辫金属发饰套装产品详情页。金色蝴蝶、星星、树叶、雪花吊坠搭配彩色发圈，配透明收纳盒，突出多款式、易携带与尺寸标注，配合脏辫、编发、丸子头等多种潮流造型场景，个性张扬。",
  },
  {
    id: 38,
    src: "/works/gift-tags.jpg",
    title: "圣诞礼物标签详情页",
    category: "节庆用品 · 详情页",
    section: "家居百货 · 详情页 A+",
    description:
      "250 枚圣诞礼物标签贴纸产品详情页。6 款卡通圣诞老人、驯鹿、雪人图案，带 To/From 书写栏，突出防水、图案清晰、自粘易用等卖点，配合礼盒包装、窗户与壁炉布景场景，节日气氛温馨可爱。",
  },
  {
    id: 39,
    src: "/works/communion-set.jpg",
    title: "圣餐派对装饰套装详情页",
    category: "节庆用品 · 详情页",
    section: "家居百货 · 详情页 A+",
    description:
      "91 件圣餐主题派对装饰套装产品详情页。蓝金白十字气球搭配桉叶藤蔓与木质小鱼装饰，突出丝绸质感叶片、安全乳胶材质、尺寸标注等卖点，配合餐桌、门饰、婚礼与儿童派对布景场景，清新神圣。",
  },
  {
    id: 40,
    src: "/works/christmas-cards.jpg",
    title: "牛皮纸圣诞贺卡详情页",
    category: "节庆用品 · 详情页",
    section: "家居百货 · 详情页 A+",
    description:
      "51 件牛皮纸圣诞贺卡套装产品详情页。含彩印卡片、白色信封与封口贴纸，突出彩色印刷、书写顺滑、配套齐全等卖点，配合尺寸标注与书写、装袋、礼盒装饰场景，红绿节日边框喜庆温暖。",
  },
  {
    id: 41,
    src: "/works/scrapbook-paper.jpg",
    title: "复古剪贴簿纸详情页",
    category: "文创手账 · 详情页",
    section: "家居百货 · 详情页 A+",
    description:
      "121 件复古剪贴簿套装（75 页素材纸 + 46 枚邮票贴纸）产品详情页。以天文、复古文献为主题，分时光记忆、日月信笺、世纪运动三大系列，突出做旧质感与尺寸标注，配合手账拼贴、书桌布置与成品展示场景，文艺复古有格调。",
  },
  {
    id: 42,
    src: "/works/mini-envelopes.jpg",
    title: "彩色牛皮纸迷你信封详情页",
    category: "文创手账 · 详情页",
    section: "家居百货 · 详情页 A+",
    description:
      "100 件 10 色迷你牛皮纸信封套装产品详情页。突出多彩配色、蘸水即封、小巧精致等卖点，配合尺寸标注与礼品装饰、零钱首饰收纳、干花种子存放等多用途场景，清新实用适合手账与礼赠人群。",
  },
  {
    id: 43,
    src: "/works/bendy-pencils.jpg",
    title: "螺纹软铅笔套装详情页",
    category: "文创手账 · 详情页",
    section: "家居百货 · 详情页 A+",
    description:
      "50 件装螺纹弯曲软铅笔 + 水果橡皮套装产品详情页。30 支彩色软铅笔搭配 24 枚西瓜草莓造型橡皮，突出高弹可弯曲、色彩鲜艳等卖点，配合课堂书写、户外绘画与礼袋填充场景，活泼有趣主打儿童人群。",
  },
  {
    id: 44,
    src: "/works/embroidery-thread.jpg",
    title: "刺绣绣花线套装详情页",
    category: "文创手账 · 详情页",
    section: "家居百货 · 详情页 A+",
    description:
      "131 件刺绣十字绣线套装产品详情页。含 100 色 8m 绣线、16 枚绣针、剪刀、顶针、穿线器、绕线板等全套工具，突出 100 色不褪色、6 股耐用等卖点，配合刺绣成品、编织手链与抱枕等 DIY 场景，色彩缤纷齐全。",
  },
  {
    id: 45,
    src: "/works/tac-carrier-mc-triplemag.jpg",
    title: "MC 快拆战术背心主图",
    category: "战术装备 · 产品图",
    section: "战术装备 · 产品视觉",
    aspect: "square",
    description:
      "Multicam 快拆战术背心（Plate Carrier）产品主图。Cobra 快拆肩扣搭配镭雕 MOLLE 面板与三联开放式步枪弹匣包，插 FDE 弹匣，白底居中构图，突出模块化结构与迷彩细节。",
  },
  {
    id: 46,
    src: "/works/tac-carrier-bk-side.jpg",
    title: "黑色战术背心侧面实拍",
    category: "战术装备 · 实拍",
    section: "战术装备 · 产品视觉",
    aspect: "square",
    description:
      "黑色战术背心暗调实拍场景。假人着装侧面视角，展示肩部结构、侧挂弹匣包与副包布局，铁丝网背景搭配硬光营造硬核战术氛围，突出全黑配色的专业质感。",
  },
  {
    id: 47,
    src: "/works/tac-chestrig-mc.jpg",
    title: "MC 战术胸挂主图",
    category: "战术装备 · 产品图",
    section: "战术装备 · 产品视觉",
    aspect: "square",
    description:
      "Multicam 战术胸挂（Chest Rig）产品主图。X 型背带 + 可拆卸副包结构，插扣模块化设计，白底悬浮构图完整展示背带走向与迷彩拼接，画面干净利落。",
  },
  {
    id: 48,
    src: "/works/tac-chestrig-bkmc.jpg",
    title: "黑色迷彩微型胸挂主图",
    category: "战术装备 · 产品图",
    section: "战术装备 · 产品视觉",
    aspect: "square",
    description:
      "黑色迷彩（Black Multicam）微型胸挂产品主图。H 型背带搭配前置弹匣仓与拉链副包，暗黑配色低调硬朗，白底居中呈现完整结构与细节。",
  },
  {
    id: 49,
    src: "/works/tac-chestrig-rg.jpg",
    title: "游骑兵绿胸挂装备包主图",
    category: "战术装备 · 产品图",
    section: "战术装备 · 产品视觉",
    aspect: "square",
    description:
      "游骑兵绿（Ranger Green）战术胸挂 + 平板电脑保护包组合产品主图。前置副包与 MOLLE 背板一体化设计，纯色沉稳，白底立体构图展示模块拼接与容量。",
  },
  {
    id: 50,
    src: "/works/tac-triple-rifle-mag-mc.jpg",
    title: "MC 三联步枪弹匣包主图",
    category: "战术装备 · 产品图",
    section: "战术装备 · 产品视觉",
    aspect: "square",
    description:
      "Multicam 三联开放式步枪弹匣包（Triple Rifle Mag Pouch）产品主图。镭雕激光切割 MOLLE 面板搭配弹力绳固定，插三只 5.56 弹匣，白底居中构图突出快取结构。",
  },
  {
    id: 51,
    src: "/works/tac-single-rifle-mag-mc.jpg",
    title: "MC 单联步枪弹匣包背面",
    category: "战术装备 · 产品图",
    section: "战术装备 · 产品视觉",
    aspect: "square",
    description:
      "Multicam 单联步枪弹匣包（TACO 式）背面产品图。展示背部 MOLLE 织带插片与弹力绳收紧结构，白底 45° 立体角度，清晰呈现挂载方式与迷彩纹理。",
  },
  {
    id: 52,
    src: "/works/tac-pistol-mag-mc.jpg",
    title: "MC 单联手枪弹匣包主图",
    category: "战术装备 · 产品图",
    section: "战术装备 · 产品视觉",
    aspect: "square",
    description:
      "Multicam 单联手枪弹匣包（TACO 式）产品主图，插 SIG SAUER P226 9mm 弹匣。弹力绳交叉收紧 + 金属挂片结构，白底居中呈现快取开放式设计与迷彩细节。",
  },
  {
    id: 53,
    src: "/works/tac-subab-pouch-mc.jpg",
    title: "MC 腹部挂包主图",
    category: "战术装备 · 产品图",
    section: "战术装备 · 产品视觉",
    aspect: "square",
    description:
      "Multicam 战术腹部挂包（Sub-abdominal Pouch）产品主图。翻盖魔术贴 + 双拉链结构，翻盖打开展示背部粘贴面，白底居中构图突出容量与模块化挂载。",
  },
  {
    id: 54,
    src: "/works/tac-dump-pouch-rg.jpg",
    title: "游骑兵绿折叠杂物包主图",
    category: "战术装备 · 产品图",
    section: "战术装备 · 产品视觉",
    aspect: "square",
    description:
      "游骑兵绿折叠式杂物回收包（Dump Pouch）产品主图。插扣快合 + 双 MOLLE 织带挂片，纯色简洁，白底居中呈现可折叠收纳结构与扣具细节。",
  },
  {
    id: 55,
    src: "/works/tac-cobra-belt-bk.jpg",
    title: "黑色 Cobra 快拆战术腰带",
    category: "战术装备 · 产品图",
    section: "战术装备 · 产品视觉",
    aspect: "square",
    description:
      "黑色内外双层 Cobra 快拆战术腰带产品主图。AustriAlpin Cobra 金属快拆扣搭配 D 型环，内衬防滑软带，白底环形构图突出高强度扣具与承重性能。",
  },
  {
    id: 56,
    src: "/works/tac-sling-bk-2point.jpg",
    title: "黑色加厚两点枪背带",
    category: "战术装备 · 产品图",
    section: "战术装备 · 产品视觉",
    aspect: "square",
    description:
      "KRYDEX 黑色加厚两点式枪背带（2-Point Sling）产品主图。加宽减压肩垫搭配快速调节拉片与金属扣具，白底展开构图完整呈现织带走向与缓冲结构。",
  },
  {
    id: 57,
    src: "/works/tac-sling-bk-padded.jpg",
    title: "黑色加厚单点枪背带",
    category: "战术装备 · 产品图",
    section: "战术装备 · 产品视觉",
    aspect: "square",
    description:
      "KRYDEX 黑色加厚单点式枪背带产品主图。人体工学减压肩垫搭配弹力缓冲绳与快调扣，白底垂挂构图突出减压设计与快速收放结构。",
  },
  {
    id: 58,
    src: "/works/tac-dump-scene-mc.jpg",
    title: "MC 杂物袋实拍场景",
    category: "战术装备 · 实拍",
    section: "战术装备 · 产品视觉",
    aspect: "square",
    description:
      "Multicam 杂物袋挂载于战术背心的暗调实拍特写。展示 MOLLE 织带挂载、提手细节与实装收纳状态，硬光暗背景强化产品质感与真实使用场景。",
  },
  {
    id: 59,
    src: "/works/tac-pouch-closeup-mc.jpg",
    title: "MC 背心插扣副包特写",
    category: "战术装备 · 实拍",
    section: "战术装备 · 产品视觉",
    aspect: "square",
    description:
      "Multicam 战术背心插扣副包暗调实拍特写。近距离呈现插扣、KRYDEX 织标、提手与镭雕 MOLLE 细节，硬光暗背景突出材质纹理与做工品质。",
  },
  {
    id: 60,
    src: "/works/tac-waterbottle-scene-mc.jpg",
    title: "MC 腰挂水壶包实拍场景",
    category: "战术装备 · 实拍",
    section: "战术装备 · 产品视觉",
    aspect: "square",
    description:
      "Multicam 腰挂折叠水壶包实拍场景。着装模特腰部侧挂视角，展示弹力绳收纳、插扣翻盖与腰带挂载方式，暗调布景搭配军绿战术裤，真实还原户外携行状态。",
  },
]

const sectionOrder = [
  "亚马逊店铺 · 整店视觉",
  "亚马逊店铺 · 分类页",
  "亚马逊店铺 · 活动专题",
  "产品详情页 · A+",
  "橱窗 A+ · 连屏优化",
  "家居百货 · 详情页 A+",
  "战术装备 · 产品视觉",
]

export function ImageGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const grouped = useMemo(() => {
    return sectionOrder
      .map((section) => ({
        section,
        items: images.filter((img) => img.section === section),
      }))
      .filter((g) => g.items.length > 0)
  }, [])

  const close = useCallback(() => setActiveIndex(null), [])
  const showNext = useCallback(() => setActiveIndex((i) => (i === null ? i : (i + 1) % images.length)), [])
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [],
  )

  useEffect(() => {
    if (activeIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowRight") showNext()
      if (e.key === "ArrowLeft") showPrev()
    }
    window.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [activeIndex, close, showNext, showPrev])

  const active = activeIndex === null ? null : images[activeIndex]

  return (
    <section id="gallery" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="space-y-3">
            <p className="font-mono text-xs tracking-[0.35em] text-accent uppercase">Gallery</p>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-balance">图片作品集</h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            按项目类别分组展示，缩略图预览。点击任意作品可放大查看完整长图与设计说明。
          </p>
        </div>

        <div className="space-y-16">
          {grouped.map((group) => (
            <div key={group.section}>
              <div className="mb-6 flex items-center gap-4">
                <h3 className="text-lg md:text-xl font-medium text-foreground whitespace-nowrap">{group.section}</h3>
                <span className="font-mono text-xs text-muted-foreground">{group.items.length} 件</span>
                <div className="h-px flex-1 bg-border" />
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {group.items.map((image) => {
                  const globalIndex = images.findIndex((img) => img.id === image.id)
                  const isSquare = image.aspect === "square" || image.section === "家居百货 · 详情页 A+"
                  return (
                    <button
                      key={image.id}
                      type="button"
                      onClick={() => setActiveIndex(globalIndex)}
                      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card text-left transition-colors hover:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      aria-label={`查看作品 ${image.title}`}
                    >
                      <div className={`relative overflow-hidden bg-secondary ${isSquare ? "aspect-square" : "aspect-[4/5]"}`}>
                        <img
                          src={image.src || "/placeholder.svg"}
                          alt={image.title}
                          loading="lazy"
                          className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] ${isSquare ? "object-center" : "object-top"}`}
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/30">
                          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-accent-foreground opacity-0 scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="p-3">
                        <p className="font-mono text-[10px] tracking-[0.25em] text-accent uppercase">{image.category}</p>
                        <h4 className="mt-1 text-sm font-medium text-foreground leading-snug text-balance line-clamp-2">
                          {image.title}
                        </h4>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
        >
          <div className="flex shrink-0 items-center justify-between gap-4 border-b border-white/10 px-4 py-3 md:px-8">
            <div className="min-w-0" onClick={(e) => e.stopPropagation()}>
              <p className="font-mono text-[10px] tracking-[0.3em] text-accent uppercase">{active.category}</p>
              <h3 className="truncate text-sm md:text-base font-medium text-white">{active.title}</h3>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  showPrev()
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label="上一张"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  showNext()
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label="下一张"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={close}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label="关闭"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-6 md:px-8" onClick={close}>
            <figure className="mx-auto max-w-3xl" onClick={(e) => e.stopPropagation()}>
              <img
                src={active.src || "/placeholder.svg"}
                alt={active.title}
                className="w-full rounded-xl object-contain shadow-2xl"
              />
              <figcaption className="mx-auto mt-6 max-w-2xl pb-10 text-center">
                <p className="text-sm leading-relaxed text-white/70">{active.description}</p>
              </figcaption>
            </figure>
          </div>
        </div>
      )}
    </section>
  )
}
