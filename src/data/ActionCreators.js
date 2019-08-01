import { ActionTypes} from "./Types";
import { RestDataSource } from "./RestDataSource";
const dataSource = new RestDataSource();

export const loadData = (dataType) => ({
    type: ActionTypes.DATA_LOAD,
    payload: dataSource.GetData(dataType)
        .then(response => {
            console.log("first1");
            return  { dataType, data: response.data};
        })
});
