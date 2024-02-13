import { all } from "@redux-saga/core/effects";
// import { teritorialUnitSaga } from "./features/teritorialUnit/teritorialUnitSaga";
// import { manyVariablesSaga } from "./features/manyVariables/manyVariablesSaga";
import { mainPageSaga } from "./features/mainPage/mainPageSaga";
export default function* rootSaga() {
	yield all([mainPageSaga()]);
	// yield all([teritorialUnitSaga(), manyVariablesSaga()]);
}
