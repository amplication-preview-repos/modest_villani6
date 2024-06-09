import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { MediaResponseList } from "./mediaResponse/MediaResponseList";
import { MediaResponseCreate } from "./mediaResponse/MediaResponseCreate";
import { MediaResponseEdit } from "./mediaResponse/MediaResponseEdit";
import { MediaResponseShow } from "./mediaResponse/MediaResponseShow";
import { MediaRequestList } from "./mediaRequest/MediaRequestList";
import { MediaRequestCreate } from "./mediaRequest/MediaRequestCreate";
import { MediaRequestEdit } from "./mediaRequest/MediaRequestEdit";
import { MediaRequestShow } from "./mediaRequest/MediaRequestShow";
import { VideoList } from "./video/VideoList";
import { VideoCreate } from "./video/VideoCreate";
import { VideoEdit } from "./video/VideoEdit";
import { VideoShow } from "./video/VideoShow";
import { ImageList } from "./image/ImageList";
import { ImageCreate } from "./image/ImageCreate";
import { ImageEdit } from "./image/ImageEdit";
import { ImageShow } from "./image/ImageShow";
import { AudioList } from "./audio/AudioList";
import { AudioCreate } from "./audio/AudioCreate";
import { AudioEdit } from "./audio/AudioEdit";
import { AudioShow } from "./audio/AudioShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"MediaProcessingService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="MediaResponse"
          list={MediaResponseList}
          edit={MediaResponseEdit}
          create={MediaResponseCreate}
          show={MediaResponseShow}
        />
        <Resource
          name="MediaRequest"
          list={MediaRequestList}
          edit={MediaRequestEdit}
          create={MediaRequestCreate}
          show={MediaRequestShow}
        />
        <Resource
          name="Video"
          list={VideoList}
          edit={VideoEdit}
          create={VideoCreate}
          show={VideoShow}
        />
        <Resource
          name="Image"
          list={ImageList}
          edit={ImageEdit}
          create={ImageCreate}
          show={ImageShow}
        />
        <Resource
          name="Audio"
          list={AudioList}
          edit={AudioEdit}
          create={AudioCreate}
          show={AudioShow}
        />
      </Admin>
    </div>
  );
};

export default App;
