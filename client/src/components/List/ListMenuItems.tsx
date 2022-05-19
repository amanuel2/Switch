import './ListMenuItems.css'

type ListMenuProps = {
    items: string[],
    icons: string[],
    fns: (() => void)[]
}

const ListMenuItems = ({items, icons, fns}: ListMenuProps) => {
    return (
        <div className="list_menu_items">
            {items.map((el,idx) => 
                <div onClick={fns[idx]} className="list_menu_item"> 
                    <span style={{backgroundImage: `url(${icons[idx]})`, backgroundRepeat: 'no-repeat'}} className="menu_icon_img"></span> 
                    <span className="menu_item_landing">{el}</span><br/> 
                </div> )}
        </div>
    )
}

export default ListMenuItems
