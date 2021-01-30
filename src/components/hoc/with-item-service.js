import React from "react";
import { ItemServiceConsumer } from "../item-service-context";

const withItemService = () => (Wrapped) => {
  return (props) => {
    return (
      <ItemServiceConsumer>
        {(itemService) => {
          <Wrapped {...props} itemService={itemService} />;
        }}
      </ItemServiceConsumer>
    );
  };
};

export default withItemService
