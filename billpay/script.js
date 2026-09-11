const records = [
  { category: '餐饮', amount: 35.5, note: '午餐' },
  { category: '交通', amount: 8, note: '地铁' },
  { category: '餐饮', amount: 62, note: '晚餐聚餐' },
  { category: '购物', amount: 199, note: '日用品' },
  { category: '餐饮', amount: -10, note: '退款（非法值，应清洗）' },
  { category: '娱乐', amount: 88, note: '电影票' },
  { category: '交通', amount: 0, note: '步行（非法值，应清洗）' },
  { category: '购物', amount: 450, note: '大额消费：外套' }
];

console.table(records);