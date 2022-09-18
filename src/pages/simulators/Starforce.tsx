import React, { Suspense } from "react";
import classNames from "classnames/bind";
import { Helmet } from "react-helmet";
import { Provider } from "react-redux";
import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import styles from "./Starforce.module.scss";
import Loading from "~/components/common/Loading";
import rootReducer from "~/store/redux";
import rootSaga from "~/store/saga";

const EquipSetting = React.lazy(
  () => import("~/components/simulators/starforce/settings/EquipSetting")
);
const DetailSetting = React.lazy(
  () => import("~/components/simulators/starforce/settings/DetailSetting")
);
const CalcButton = React.lazy(
  () => import("~/components/simulators/starforce/CalcButton")
);
const Result = React.lazy(
  () => import("~/components/simulators/starforce/result/Result")
);

const cx = classNames.bind(styles);

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevToolsDevelopmentOnly(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

const Starforce = () => {
  return (
    <Provider store={store}>
      <div className={cx("wrapper")}>
        <Helmet>
          <title>스타포스 시뮬레이터</title>
          <meta name="description" content="메이플스토리 스타포스 시뮬레이터" />
          <meta property="og:title" content="스타포스 시뮬레이터" />
          <meta
            property="og:description"
            content="메이플스토리 스타포스 시뮬레이터"
          />
        </Helmet>
        <div className={cx("container")}>
          <h1 className={cx("title")}>스타포스 시뮬레이터</h1>
          <p className={cx("info")}>
            모바일 환경에서 실행 시 렉이 있을 수 있습니다. PC 환경에서의 사용을
            권장드립니다.
          </p>
          <Suspense
            fallback={<Loading wrapperClassName={cx("loading-wrapper")} />}
          >
            <div className={cx("content-container")}>
              <div className={cx("column")}>
                <EquipSetting />
                <DetailSetting />
                <CalcButton />
              </div>
              <Result className={cx("column")} />
            </div>
          </Suspense>
        </div>
      </div>
    </Provider>
  );
};

export default React.memo(Starforce);
