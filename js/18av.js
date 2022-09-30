var rule = {
    title:'18av',
    host:'https://maa1812.com',
    url:'/zh/fyclass/all/fypage.html',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    class_name:'中文字幕&无码AV&自拍影片&动画&近亲相奸&通奸&出轨&人妻&寡妇&秘书&义母&按摩&母乳&人妻・主妇',//静态分类名称拼接
    class_url:'chinese_random&/uncensored_random&dt_random&animation_random&chinese_category/7/近親相姦&chinese_category/21/通姦&chinese_category/34/出軌&chinese_category/72/人妻&chinese_category/75/寡婦&chinese_category/81/秘書&chinese_category/87/義母&chinese_category/162/按摩&chinese_category/164/母乳&chinese_category/299/人妻・主婦',//静态分类标识拼接
   //class_parse:'ul.animenu__nav&&li;a&&Text;a&&href',
    limit:5,
    play_parse:true,
    lazy:'',
    一级:'.posts div;.meta&&Text;img&&src;.top&&Text;a&&href',
    二级:'*',
	
}

