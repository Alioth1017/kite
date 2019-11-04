export const statusList = {
  // 所有内容的审核状态
  pendingReview: 1, // 待审核
  reviewSuccess: 2, // 审核成功
  reviewFail: 3, // 审核失败
  freeReview: 4, // 免审核
  deleted: 5 // 已删除
}
export const statusListText = {
  // 所有内容的审核状态文字
  [statusList.pendingReview]: '待审核', // 待审核
  [statusList.reviewSuccess]: '审核成功', // 审核成功
  [statusList.reviewFail]: '审核失败', // 审核失败
  [statusList.freeReview]: '免审核', // 免审核
  [statusList.deleted]: '已删除' // 已删除
}

export const articleType = {
  // 文章的类型
  article: 1, // 文章
  note: 2, // 笔记
  draft: 3 // 草稿
}

export const articleTypeText = {
  // 文章的类型
  [articleType.article]: '文章', // 文章
  [articleType.note]: '笔记', // 笔记
  [articleType.draft]: '草稿' // 草稿
}

export const dynamicType = {
  // 文章的类型
  dynamic: 1, // 默认动态
  img: 2, // 图片
  link: 3, // 链接
  video: 4 // 视频
}

export const dynamicTypeText = {
  // 文章的类型
  [dynamicType.dynamic]: '默认动态', // 文章
  [dynamicType.img]: '图片', // 笔记
  [dynamicType.link]: '链接', // 草稿
  [dynamicType.video]: '视频' // 草稿
}

export const userMessageType = {
  // 文章的类型
  user: 1, // 用户
  article: 2, // 文章
  article_blog: 3, // 文章个人专栏
  article_comment: 4, // 文章评论
  book: 5, // 小书章节
  book_comment: 6, // 小书章节评论
  books: 7, // 小书
  books_comment: 8, // 小书评论
  dynamic: 9, // 片刻
  dynamic_comment: 10, // 片刻评论
  thumb_dynamic: 11, // 点赞片刻
  like_article: 12, // 喜欢文章
  collect_blog: 13, // 收藏专栏
  collect_books: 14 // 收藏小书
}

export const userMessageAction = {
  system: 1, // 系统消息
  like: 2, // 喜欢
  collect: 3, // 收藏
  attention: 4, // 关注
  comment: 5, // 评论
  reply: 6, // 回复
  thumb: 7, // 赞
  buy: 8 // 购买
}

export const userMessageTypeText = {
  // 文章的类型
  [userMessageType.user]: {
    [userMessageAction.attention]: '关注了你' // 用户1
  },
  [userMessageType.article]: {
    [userMessageAction.comment]: '评论了你的文章' // 文章2
  },
  [userMessageType.article_blog]: {
    [userMessageAction.collect]: '收藏了你的专栏' // 文章个人专栏3
  },
  [userMessageType.article_comment]: {
    [userMessageAction.reply]: '文章中回复你的' // 文章评论4
  },
  [userMessageType.book]: {
    [userMessageAction.comment]: '评论了你的小书章节' // 小书章节5
  },
  [userMessageType.book_comment]: {
    [userMessageAction.reply]: '小书章节中回复你的' // 小书章节评论6
  },
  [userMessageType.books]: {
    [userMessageAction.comment]: '评论了你的小书' // 小书7
  },
  [userMessageType.books_comment]: {
    [userMessageAction.reply]: '小书中回复你的' // 小书评论8
  },
  [userMessageType.dynamic]: {
    [userMessageAction.comment]: '评论了你片刻' // 片刻9
  },
  [userMessageType.dynamic_comment]: {
    [userMessageAction.comment]: '片刻中回复你的' // 片刻评论10
  },
  [userMessageType.thumb_dynamic]: {
    [userMessageAction.thumb]: '点赞了你的片刻' // 点赞了你的片刻
  },
  [userMessageType.like_article]: {
    [userMessageAction.like]: '喜欢了你的文章' // 喜欢了你的文章
  },
  [userMessageType.collect_blog]: {
    [userMessageAction.collect]: '收藏你的专栏' // 收藏你的专栏
  },
  [userMessageType.collect_books]: {
    [userMessageAction.collect]: '收藏了你的小书' // 收藏了你的小书
  }
}

export const userMessageActionText = {
  [userMessageAction.system]: '新的系统消息',
  [userMessageAction.like]: '新的喜欢',
  [userMessageAction.collect]: '新的收藏',
  [userMessageAction.attention]: '新的关注',
  [userMessageAction.comment]: '新的评论',
  [userMessageAction.reply]: '新的赞',
  [userMessageAction.thumb]: '新的回复',
  [userMessageAction.buy]: '新的购买'
}