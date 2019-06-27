import styled from 'styled-components';
import { Layout } from 'antd';
const { Header, Content, Sider } = Layout;


export const HomeWrap = styled.div`
  display: flex;
  height: 100%;
`
export const SiderWrap = styled(Sider)`

`;

export const HeaderWrap = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .trigger {
    font-size: 24px;
    color: #fff;
  }
`;

export const ContentWrap = styled(Content)`

`;

export const Logo = styled.div`
  height: 64px;
  background: green;
`

