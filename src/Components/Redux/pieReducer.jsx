import { createReducer } from '../../app/common/util/reducerUtil'

const initialPieData = [
    { name: 'Air temp', value: 28 },
    { name: 'Air pressure', value: 925 },
    { name: 'Soil humidity', value: 80 },

  ];

export default createReducer(initialPieData, [])
 