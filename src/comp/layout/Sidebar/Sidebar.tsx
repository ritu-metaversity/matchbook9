
import { useMemo, useState } from 'react';
import { HiOutlineMinusSm } from 'react-icons/hi';
import { FiPlus } from 'react-icons/fi';
import './sidebar.scss';
import { useLeftMenuDataQuery } from '../../../store/service/gameListService';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';





const Sidebar = () => {
    const { data } = useLeftMenuDataQuery();

    const [menuKey, setMenuKey] = useState([]);
    const handleClick = (key) => {
        const newKey = [];
        if (key?.length && key[key.length - 1]?.toString().includes('sport-')) {
            setMenuKey([key[key.length - 1]]);
            return;
        }
        if (menuKey?.length) {
            for (const currentKey of menuKey) {
                if (key.includes(currentKey)) {
                    newKey.push(currentKey);
                } else {
                    break;
                }
            }
            if (key?.length > menuKey.length) {
                newKey.push(key.pop());
            }
            setMenuKey(newKey);
        } else {
            setMenuKey(key);
        }
    };

    const items = useMemo(() => {
        return data?.data?.map((el, index) => {
            return {
                key: index + 1,
                label: el?.sportName,
                children: el?.matchList?.map((curEl, ind) => { // Specify the type of curEl
                    return {
                        key: curEl?.matchId,
                        icon: <div className="icon-vicon"></div>,
                        label: <Link to={`/analysis-running-market/${el?.sportId}/${curEl?.matchId}`}> {curEl?.matchName} </Link>
                    };
                })
            };
        });
    }, [data?.data]);

    return (
        <div>
            <Menu
                onOpenChange={handleClick}
                mode="inline"
                items={items}
                inlineIndent={5}
                openKeys={[...menuKey]}
                expandIcon={(props: any) => props.isSubMenu && <div className="icon-div">{props.isOpen ? <HiOutlineMinusSm /> : <FiPlus />}</div>}
                className="sider-menu"
            />
        </div>
    );
};

export default Sidebar;
