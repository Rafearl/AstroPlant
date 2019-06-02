import { createReducer } from '../../app/common/util/reducerUtil'

const initialMapData = [
    {kit:'kit1', lng:'-3.703582', lat:'40.416705', temp:'25', airP:'800', soilH:'80'},
    {kit:'kit2', lng:'-2.934985', lat:'43.263012', temp:'25', airP:'800', soilH:'80'},
    {kit:'kit3', lng:'5.291266', lat:'52.132633', temp:'25', airP:'800', soilH:'80'},
    {kit:'kit4', lng:'4.355710', lat:'50.845539', temp:'25', airP:'800', soilH:'80'},
    {kit:'kit5', lng:'8.227512', lat:'46.818188', temp:'25', airP:'800', soilH:'80'},
    {kit:'kit6', lng:'6.129583', lat:'49.815273', temp:'25', airP:'800', soilH:'80'}
]

export default createReducer(initialMapData, [])