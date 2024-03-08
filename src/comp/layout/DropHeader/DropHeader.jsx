/* eslint-disable react/prop-types */
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from 'react-icons/fa';
import './styles.scss';
import { useState } from 'react';
import { useDroupUserBalanceQuery } from '../../../store/service/gameListService';

const DropHeader = () => {
    const [detailsVisible, setDetailsVisible] = useState(false);
    const [animationHeight, setAnimationHeight] = useState(false);
    const { data } = useDroupUserBalanceQuery();

    const toggleDetailsVisibility = () => {
        setAnimationHeight(!animationHeight);
        setDetailsVisible(!detailsVisible);
    };

    return (
        <div className={`droup_header ${animationHeight ? 'drop-header1' : 'drop-header'}`}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 0' }}>
                {!detailsVisible ? (
                    <FaRegArrowAltCircleDown
                        onClick={toggleDetailsVisibility}
                        style={{ color: 'white', borderRadius: '50%', fontSize: '20px' }}
                    />
                ) : (
                    <FaRegArrowAltCircleUp
                        onClick={toggleDetailsVisibility}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'white',
                            borderRadius: '50%',
                            fontSize: '20px'
                        }}
                    />
                )}

                {detailsVisible && (
                    <div className="drop-down-cont">
                        <div className="left_details left_side">
                            <DetailRow
                                label="Upper Level Credit Reference"
                                value={Number(data?.data?.userBalanceResponse?.upperLevelCreditRef).toFixed(2)}
                            />
                            <DetailRow
                                label="Total Master Balance"
                                value={Number(data?.data?.userBalanceResponse?.totalBalance).toFixed(2)}
                            />
                            <DetailRow
                                label="Available Balance"
                                value={Number(data?.data?.userBalanceResponse?.availableBalance).toFixed(2)}
                            />
                        </div>
                        <div className="left_details middle_side">
                            <DetailRow
                                label="Down Level Occupancy Balance"
                                value={Number(data?.data?.userDownlineBalance?.downLevelOccupacyBalance).toFixed(2)}
                            />
                            <DetailRow
                                label="Upper Level"
                                value={Number(data?.data?.userBalanceResponse?.upperLevel).toFixed(2)}
                            />
                            <DetailRow
                                label="Available Balance With Profit/Loss"
                                value={Number(data?.data?.userBalanceResponse?.availableBalanceWithProfitLoss).toFixed(2)}
                            />
                        </div>
                        <div className="left_details right_side">
                            <DetailRow
                                label="Down Level Credit Reference"
                                value={Number(data?.data?.userDownlineBalance?.downLevelCreditRef).toFixed(2)}
                            />
                            <DetailRow
                                label="Down Level Profit/Loss"
                                value={Number(data?.data?.userDownlineBalance?.downLevelProfitLoss).toFixed(2)}
                            />
                            <DetailRow
                                label="My Profit/Loss"
                                value={Number(data?.data?.userBalanceResponse?.myProfitLoss).toFixed(2)}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const DetailRow = ({ label, value }) => (
    <p>
        <span className="top-left">{label}</span>
        <span className="top-right">{value}</span>
    </p>
);

export default DropHeader;
