import * as React from "react";
import styled from '@emotion/styled/macro';
import { Layout } from "../../layout";
import { Link } from "react-router-dom";
import { BiArrowBack } from 'react-icons/bi';
import { DetailContainer } from "./containers";

export const DetailPage = () => {
  return (
    <Layout>
      <DetailWrapper> 
        <DetailHeader>
          <DetailContent>
            <DetailContentWrapper>
              <DetailSpan>
                <DetailLink to="/">
                  <DetaiIcon />
                  <DetaiText>Back</DetaiText>
                </DetailLink>
              </DetailSpan>
            </DetailContentWrapper>
          </DetailContent>
        </DetailHeader>
        <DetailContainer />
      </DetailWrapper>
    </Layout>
  );
};

const DetailWrapper = styled.div`
  flex: 1 1 0;
  padding: 3.75rem 0 3.75rem 0;
`;

const DetailHeader = styled.div`
  height: 8.75rem;
  margin-left: 5rem;  
`;

const DetailContent = styled.div`
  padding-top: 5.75rem;
`;

const DetailContentWrapper = styled.div`
  --content-wrapper-padding-inline: 1.25rem;
  --content-width: 75.625rem;
  box-sizing: border-box;
  margin: 0 auto;
  max-width: calc(var(--content-width) + var(--content-wrapper-padding-inline)*2);
  padding-left: var(--content-wrapper-padding-inline);
  padding-right: var(--content-wrapper-padding-inline);
`;

const DetailSpan = styled.span`
  display: flex;
  justify-content: start;
`;

const DetailLink = styled(Link)`
  display: flex;
  justify-content: start;
  text-decoration: none;
  color: #E8EDDF;
  text-align: center;
`;

const DetaiIcon = styled(BiArrowBack)`
  margin-top: 17px;
`;

const DetaiText = styled.p`
  margin-left: 15px;
`;

