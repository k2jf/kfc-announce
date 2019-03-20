export const getAnnounces = (params) => {
  return new Promise(resolve => {
    setTimeout(() => resolve({
      'code': 200,
      'data': {
        'endRow': 3,
        'firstPage': 1,
        'hasNextPage': false,
        'hasPreviousPage': false,
        'isFirstPage': true,
        'isLastPage': true,
        'lastPage': 1,
        'list': [{
          'content': '温馨提示：2018-06-07 08:00~08:30 系统进行功能升级，届时可能出现访问延迟的情况，请耐心等待。',
          'createDate': 1546931904000,
          'creator': 'tadmin_goldwind',
          'endTime': 1552665600000,
          'id': 29,
          'remark': '',
          'startTime': 1552544520000
        }, {
          'content': 'MD4X 2.0系统将于2018/12/24周一正式上线，访问地址 md4x.goldwind.com.cn，如果使用中遇到问题请联系 guidi@goldwind.com.cn，谢谢！',
          'createDate': 1546931944000,
          'creator': 'cx',
          'endTime': 1548950400000,
          'id': 30,
          'remark': '上线',
          'startTime': 1546876800000
        }, {
          'content': '温馨提示：2019-03-07 08:00~08:30 系统进行功能升级，届时可能出现访问延迟的情况，请耐心等待。',
          'createDate': 1551342673000,
          'creator': 'liuxiaoxuan',
          'endTime': 1552060800000,
          'id': 35,
          'remark': '',
          'startTime': 1551283200000
        }],
        'navigateFirstPage': 1,
        'navigateLastPage': 1,
        'navigatePages': 8,
        'navigatepageNums': [1],
        'nextPage': 0,
        'orderBy': null,
        'pageNum': 1,
        'pageSize': 10,
        'pages': 1,
        'prePage': 0,
        'size': 3,
        'startRow': 1,
        'total': 3
      },
      'message': 'SUCCESS'
    }), 1500
    )
  }
  )
}

/**
 * FIXME this is NOT a mock, the response content needs redefine.
 * @return {Promise<any>}
 */
export const getEffectiveAnnounce = () => {
  const json = {
    'code': 200,
    'data': {
      'endRow': 3,
      'firstPage': 1,
      'hasNextPage': false,
      'hasPreviousPage': false,
      'isFirstPage': true,
      'isLastPage': true,
      'lastPage': 1,
      'list': [{
        'content': '温馨提示：2018-06-07 08:00~08:30 系统进行功能升级，届时可能出现访问延迟的情况，请耐心等待。',
        'createDate': 1546931904000,
        'creator': 'tadmin_goldwind',
        'endTime': 1552665600000,
        'id': 29,
        'remark': '',
        'startTime': 1552544520000
      }, {
        'content': 'MD4X 2.0系统将于2018/12/24周一正式上线，访问地址 md4x.goldwind.com.cn，如果使用中遇到问题请联系 guidi@goldwind.com.cn，谢谢！',
        'createDate': 1546931944000,
        'creator': 'cx',
        'endTime': 1548950400000,
        'id': 30,
        'remark': '上线',
        'startTime': 1546876800000
      }, {
        'content': '温馨提示：2019-03-07 08:00~08:30 系统进行功能升级，届时可能出现访问延迟的情况，请耐心等待。',
        'createDate': 1551342673000,
        'creator': 'liuxiaoxuan',
        'endTime': 1552060800000,
        'id': 35,
        'remark': '',
        'startTime': 1551283200000
      }],
      'navigateFirstPage': 1,
      'navigateLastPage': 1,
      'navigatePages': 8,
      'navigatepageNums': [1],
      'nextPage': 0,
      'orderBy': null,
      'pageNum': 1,
      'pageSize': 10,
      'pages': 1,
      'prePage': 0,
      'size': 3,
      'startRow': 1,
      'total': 3
    },
    'message': 'SUCCESS'
  }
  return new Promise(resolve => resolve({ data: json.data.list }))
}

export const addAnnounce = (formItem) => {
  return new Promise(resolve => resolve({ code: 200 }))
}

export const delAnnounce = (id) => {
  return new Promise(resolve => resolve({ code: 200 }))
}

export const setAnnounce = (formItem) => {
  return new Promise(resolve => resolve({ code: 200 }))
}
