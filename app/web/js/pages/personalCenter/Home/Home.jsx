/*
 * huangzongzhe
 * 2018.07.31
 */
import React, {
  Component
} from 'react'

import { List } from 'antd-mobile'
import { hashHistory } from 'react-router'

import style from './Home.scss'

import ListContent from '../../../components/ListContent/ListContent'

// react-intl 国际化测试
import { FormattedMessage } from 'react-intl'
import WalletUtil from "../../../utils/Wallet/wallet";

const Item = List.Item;

class personalCenterHome extends Component {
  constructor() {
    super();
    const walletUtilInstance = new WalletUtil();
    this.state = {
      walletType: walletUtilInstance.getWalletType()
    };
  }

  componentDidMount() {
    // 比如微信就会弹个底窗上来，就resize了
    window.onresize = () => {
      this.setState({
        personalRandom: Math.random()
      });
    };
  }

  render() {
    const { walletType } = this.state;

    return (
      <div className={style.container + ' ' + 'aelf-personal-pages aelf-solid'}>

        {walletType === 'local' && <List className={'aelf-list'}>
          <Item onClick={() => hashHistory.push('/personalcenter/walletmanage?title=WalletManagement')}>
            <ListContent
              type="small"
              icon="wallet16"
              text={
                <FormattedMessage
                  id = 'aelf.WalletDetail'
                  defaultMessage = 'Wallet Detail'
                />
              }
            />
          </Item>
        </List>}

        {/* <List className={'aelf-list'}>
                    <Item onClick={() => hashHistory.push('/transactions')}>
                        <ListContent
                            icon="tx_history16"
                            text={
                                <FormattedMessage
                                    id = 'aelf.TransactionList'
                                    defaultMessage = 'Transaction List'
                                />
                            }
                        ></ListContent>
                    </Item>
                </List> */}

        {/* <div className={style.blank}></div> */}

        {/* <List className={'aelf-list'}>
                    <Item onClick={() => hashHistory.push('/contactaddress')}>
                        <ListContent
                            type="small"
                            icon="contact16"
                            text={
                                <FormattedMessage
                                    id = 'aelf.AddressBook'
                                    defaultMessage = 'Address Book'
                                />
                            }
                        ></ListContent>
                    </Item>
                </List> */}
        <List className={'aelf-list'}>
          <Item onClick={() => hashHistory.push('/personalcenter/systemsetting')}>
            <ListContent
              type="small"
              icon="setting16"
              text={
                <FormattedMessage
                  id = 'aelf.SystemSetting'
                  defaultMessage = 'System Setting'
                />
              }
            />
          </Item>
        </List>
        <List className={'aelf-list'}>
          <Item onClick={() => hashHistory.push('/personalcenter/help?title=HelpCenter')}>
            <ListContent
              type="small"
              icon="help16"
              text={
                <FormattedMessage
                  id = 'aelf.HelpCenter'
                  defaultMessage = 'Help Center'
                />
              }
            />
          </Item>
        </List>
        <List className={'aelf-list'}>
          <Item onClick={() => hashHistory.push('/personalcenter/about?title=AboutELFWallet')}>
            <ListContent
              type="small"
              icon="about16"
              text={
                <FormattedMessage
                  id = 'aelf.About'
                  defaultMessage = "About ELF Official Wallet"
                />
              }
            />
          </Item>
        </List>
        <List className={'aelf-list'}>
          <Item onClick={() => hashHistory.push('/connect')}>
            <ListContent
              type="small"
              icon="contact16"
              text={'Change Wallet Type'}
            />
          </Item>
        </List>
        <List className={'aelf-list'}>
          <Item onClick={() => hashHistory.push('/personalcenter/unconfirmedtransactions')}>
            <ListContent
              type="small"
              icon="tx_history16"
              text={
                <FormattedMessage
                  id = 'aelf.Cross chain transactions to be confirmed'
                  defaultMessage = "Cross chain transactions to be confirmed"
                />
              }
            />
          </Item>
        </List>

        {/*<List>*/}
        {/*<Item onClick={() => hashHistory.push('/personalcenter/walletmanage?title=钱包管理')}>钱包管理</Item>*/}
        {/*</List>*/}
        {/*<List>*/}
        {/*<Item onClick={() => hashHistory.push('/personalcenter/about?title=关于我们')}>关于我们</Item>*/}
        {/*</List>*/}
        {/*<List>*/}
        {/*<Item onClick={() => hashHistory.push('/personalcenter/help?title=帮助中心')}>帮助中心</Item>*/}
        {/*</List>*/}

      </div>
    );
  }
}

export default personalCenterHome
