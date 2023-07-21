import * as React from "react";
import styled from '@emotion/styled/macro';
import { Layout } from "../../layout";
import { CollectionListComponent } from "./components";

export const CollectionPage = () => {
  return (
    <Layout>
      <CollectionWrapper>
        <CollectionHeader>
          <CollectionContent>
            <CollectionContentWrapper>
              <CollectionContentComponent>
                <div></div>
                <h1>My Collections</h1>
              </CollectionContentComponent>
            </CollectionContentWrapper>
          </CollectionContent>
        
        </CollectionHeader>
        <CollectionListComponent />
      </CollectionWrapper>
    </Layout>
  );
};

const CollectionWrapper = styled.div`
  flex: 1 1 0;
  padding: 3.75rem 0 3.75rem 0;
`;

const CollectionHeader = styled.div`
  height: 8.75rem;  
`;

const CollectionContent = styled.div`
  padding-top: 6.75rem;
`;

const CollectionContentWrapper = styled.div`
  --content-wrapper-padding-inline: 1.25rem;
  --content-width: 55.625rem;
  box-sizing: border-box;
  margin: 0 auto;
  max-width: calc(var(--content-width) + var(--content-wrapper-padding-inline)*2);
  padding-left: var(--content-wrapper-padding-inline);
  padding-right: var(--content-wrapper-padding-inline);
`;

const CollectionContentComponent = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  min-width: 0;
  border-bottom: 1px solid #4A4E58;
`;

