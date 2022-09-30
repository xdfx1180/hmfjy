var rule = {
    title:'Missav',
    host:'https://missav.com',
	searchUrl:'/cn/search/**',
    url:'/cn/fyclass?page=fypage',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    class_name:'中文字幕&最近更新&新作上市&无码流出&东京热&一本道&人妻&熟女&剧情&乱伦&姐姐&不伦&姐妹&按摩&各种职业&母亲&年轻妻子&义母&已婚女人&女优合集&多个故事&白人&未亡人&母乳&怀孕&秘书&戴绿帽子&养女&最佳，综合&伯母&爷爷&孕妇&妈妈朋友',//静态分类名称拼接
    class_url:'chinese-subtitle&new&release&uncensored-leak&tokyohot&1pondo&genres/人妻&genres/熟女&genres/剧情&genres/乱伦&genres/姐姐&genres/不伦&genres/姐妹&genres/按摩&genres/各种职业&genres/母亲&genres/年轻妻子&genres/义母&genres/已婚女人&genres/女优合集&genres/多个故事&genres/白人&genres/未亡人&genres/母乳&genres/怀孕&genres/秘书&genres/戴绿帽子&genres/养女&genres/最佳，综合&genres/伯母&genres/爷爷&genres/孕妇&genres/妈妈朋友',//静态分类标识拼接
    limit:5,
    play_parse:true,
    lazy:'',
    一级:'.grid.grid-cols-2 div&&a;.lozad.w-full&&alt;.lozad.w-full&&data-src;.absolute.bottom-1&&Text;a&&href',
    二级:'*',
	搜索:'.grid.grid-cols-2 div&&a;.lozad.w-full&&alt;.lozad.w-full&&data-src;.absolute.bottom-1&&Text;a&&href',
	searchable:1,//是否启用全局搜索,
    quickSearch:1,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
}

