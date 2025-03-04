import { NavLink } from 'react-router-dom';

import { HealthLabel } from '../component/HealthLabel';
import { ComponentInfo } from '../component/types';

import Table from './Table';

import styles from './ComponentList.module.css';

interface ComponentListProps {
  components: ComponentInfo[];
  parent?: string;
}

const TABLEHEADERS = ['Health', 'ID'];

const ComponentList = ({ components, parent }: ComponentListProps) => {
  const tableStyles = { width: '130px' };
  const pathPrefix = parent ? parent + '/' : '';

  /**
   * Custom renderer for table data
   */
  const renderTableData = () => {
    return components.map(({ health, id }) => (
      <tr key={id} style={{ lineHeight: '2.5' }}>
        <td>
          <HealthLabel health={health.state} />
        </td>
        <td className={styles.idColumn}>
          <span className={styles.idName}>{id}</span>
          <NavLink to={'/component/' + pathPrefix + id} className={styles.viewButton}>
            View
          </NavLink>
        </td>
      </tr>
    ));
  };

  return (
    <div className={styles.list}>
      <Table tableHeaders={TABLEHEADERS} renderTableData={renderTableData} style={tableStyles} />
    </div>
  );
};

export default ComponentList;
