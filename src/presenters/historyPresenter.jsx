import { observer } from "mobx-react-lite";

import HistoryView from "../views/tabs/HistoryView";

const HistoryTab = observer(({chatModel}) => {
  if (!chatModel) {
    return <div>Error: Chat model is not initialized.</div>;
  }

  return (
    <HistoryView
      verifiedMessages={chatModel.verifiedMessages}
    />
  );
});

export default HistoryTab;