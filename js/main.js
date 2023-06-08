/** 网址列表 */
const websiteList = [
  {
    name: '百度',
    url: 'https://www.baidu.com'
  },
  {
    name: '谷歌',
    url: 'https://www.google.com'
  }
]

/** 社交链接列表 */
const socialList = [
  {
    name: '哔哩哔哩',
    url: 'https://www.bilibili.com'
  },
  {
    name: '油管',
    url: 'https://www.youtube.com'
  }
]


/**
 * 向列表DOM中push内容
 * @param {string} targetId 目标DOM的ID
 * @param {array} toPushList 要PUSH的内容列表
 */
function pushItemInList (targetId, toPushList) {
  toPushList.forEach(item => {
    let li = document.createElement('li')

    let a = document.createElement('a')
    a.setAttribute('href', item.url)
    a.setAttribute('target', "_blank")
    a.innerText = item.name

    li.appendChild(a)
    li.classList.add('link-card')

    document.getElementById(targetId).append(li)
  })
}

function main () {
  console.log("我执行了函数")
  pushItemInList('social-list', socialList)
  pushItemInList('website-list', websiteList)
}

/**
 * 入口立即执行函数
 */
(() => main())()
