import { Button, Col, Form, Input, Row, Select } from 'antd'
import { Option } from 'antd/lib/mentions'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import React from 'react'

import { useRouter } from 'next/router'
import styled from 'styled-components'

const WCampaignsUpdateRate = styled.div`
  width: 100%;
  padding: 20px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(233, 233, 233);
  height: 100%;
  margin-top: 10px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 35px;
  }

  .zodi-control-page {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 32px;

    ${({ theme }) => theme.mediaQueries.sm} {
      align-items: flex-end;
      flex-direction: row;
    }

    h1 {
      font-size: 50px;
      font-weight: 500;
      margin-bottom: 15px;

      ${({ theme }) => theme.mediaQueries.sm} {
        margin-bottom: 0;
      }
    }

    a {
      border-color: rgb(24, 144, 255);
      background: rgb(24, 144, 255);
      text-shadow: rgb(0 0 0 / 12%) 0px -1px 0px;
      box-shadow: rgb(0 0 0 / 4%) 0px 2px;
      color: rgb(255, 255, 255) !important;
      padding: 8px 20px;
      min-height: 38px;
      max-height: 38px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
      cursor: pointer;
    }
  }

  .ant-form {
    .ant-row {
      .ant-col {
        margin: 0;

        ${({ theme }) => theme.mediaQueries.sm} {
          margin-left: 16.66666667%;
        }
      }

      .ant-form-item-label {
        min-width: 110px;
        margin-left: 0;
        text-align: left;

        .ant-form-item-required {
          justify-content: flex-start;
        }
      }
    }
  }

  .custom-repeater-field {
    .ant-form-item-control {
      margin: 0 !important ;

      .ant-form-item-label {
        /* min-width: 30%; */
      }

      .ant-form-item-control {
        ${({ theme }) => theme.mediaQueries.sm} {
          margin-left: 16.666666667% !important;
        }
      }
    }

    .ant-btn-dashed {
      display: flex;
      justify-content: space-between;
      align-items: center;

      ${({ theme }) => theme.mediaQueries.sm} {
        justify-content: center;
      }

      span {
        text-align: left;
        margin: 0;
      }

      span:last-child {
        margin-left: 10px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        display: inline-block;
      }
    }
  }
`

const CampaignsUpdateRate: React.FC = () => {
  const [form] = Form.useForm()
  const router = useRouter()

  const handleSubmit = (values) => {
    const data = {}
  }

  return (
    <WCampaignsUpdateRate>
      <div className="zodi-control-page">
        <h1>Update Rate For Campaigns</h1>
        <Button type="primary" size="large" onClick={() => router.back()}>
          Back
        </Button>
      </div>
      <Form form={form} onFinish={handleSubmit}>
        <Row gutter={32}>
          <Col span={16} offset={4}>
            <Form.Item name="Selected Campaigns" label="Campaigns" rules={[{ required: true }]}>
              <Select allowClear size="large" placeholder="Selected Campaigns">
                {/* {listCurrency?.map((item) => (
                      <Option key={item._id} value={item._id}>
                        {item.code}
                      </Option>
                    ))} */}
                <Option key="1" value="selected">
                  Selected Campaigns
                </Option>

                <Option key="2" value="selected">
                  Selected Campaigns 2
                </Option>

                <Option key="3" value="selected">
                  Selected Campaigns 3
                </Option>
              </Select>
            </Form.Item>

            <div className="custom-repeater-field">
              <Form.List name="meta_data">
                {(fields, { add, remove }, { errors }) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => (
                      <Form.Item required={false} key={key}>
                        <Form.Item
                          {...restField}
                          label="NFT Name"
                          name="nft-name"
                          validateTrigger={['onChange', 'onBlur']}
                          rules={[
                            {
                              required: true,
                              whitespace: true,
                              message: "Please input passenger's or delete this field.",
                            },
                          ]}
                        >
                          <Select allowClear size="large" placeholder="STAR">
                            <Option key="1" value="star">
                              star 1
                            </Option>

                            <Option key="2" value="star">
                              star 2
                            </Option>

                            <Option key="3" value="star">
                              star 3
                            </Option>
                          </Select>
                        </Form.Item>

                        <Form.Item
                          {...restField}
                          name="opv-reward"
                          label="OPV Reward"
                          validateTrigger={['onChange', 'onBlur']}
                          rules={[
                            {
                              required: true,
                              whitespace: true,
                              message: "Please input passenger's or delete this field.",
                            },
                          ]}
                        >
                          <Input size="large" placeholder="1000" autoComplete="true" />
                        </Form.Item>

                        <MinusCircleOutlined className="dynamic-delete-button" onClick={() => remove(name)} />
                      </Form.Item>
                    ))}

                    <Form.Item className="button-action">
                      <Button type="dashed" onClick={() => add()} style={{ width: '100%' }} icon={<PlusOutlined />}>
                        Add new NFT and Reward
                      </Button>
                      <Form.ErrorList errors={errors} />
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </div>
          </Col>
        </Row>

        <Form.Item className="action" style={{ textAlign: 'center' }}>
          <Button size="large" type="default" htmlType="submit" className="primary-button">
            Confirm
          </Button>
        </Form.Item>
      </Form>
    </WCampaignsUpdateRate>
  )
}

export default CampaignsUpdateRate
