/**
 * Copyright (c) 2016-present, ecidi.
 * All rights reserved.
 * 
 * This source code is licensed under the GPL-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * BasePage
 */

import React from 'react';
import Helmet from 'react-helmet';
import 'sanitize.css/sanitize.css';

/* components */
import Footer from 'Components/Footer';

/* styles */
import styles from './styles.css';

function BasePage(props) {
    return (
        <div className={styles.wrapper}>
            <Helmet titleTemplate="%s - Ecidi"/>
            {React.Children.toArray(props.children)}
            <Footer />
        </div>
    );
}

BasePage.defaultProps = {
	children: React.PropTypes.node,
};

export default BasePage;
