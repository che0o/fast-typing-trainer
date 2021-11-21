import { Logo } from '../../components/Logo'
import React from 'react';
import styles from './index.module.css'
import {TextField} from '../../components/TextField';
import {SpeedInfo} from "../../components/SpeedInfo";
import {ResetButton} from "../../components/ResetButton";
import { Accuracy } from '../../components/Accuracy';

export const Layout = ({dispatch, state}) => {
    return (
        <div className={styles.wrap}>
            <div className={styles.header}>
                <div className="container">
                    <Logo />
                    <div>Fast Typing Trainer</div>
                </div>
            </div>
            <main className={styles.main}>
                <div className="container">
                    <div className={styles.main_wrap}>
                        <div className={styles.content}>
                            <TextField />
                            <div className={styles.result}>
                                <SpeedInfo />
                                <Accuracy />
                                <ResetButton />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}