//Action Tipleri
export const userAdd = 'USER_ADD';
export const userDelete = 'USER_DELETE';
export const userUpdate = 'USER_UPDATE';


//Action Üreticileri

export const Add = (user) => ({ type: userAdd, user: user })

export const Delete = (id) => ({ type: userDelete, id: id })

export const Update=(user) => ({ type: userUpdate, user: user })