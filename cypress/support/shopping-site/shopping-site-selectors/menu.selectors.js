export const menuSelectors = {
    products: '[data-test="NavbarAuxDepartments"]',
    products_categories: {
        tv_av_foto: '.em-icon-tv',
        sub_categories: {
            tv: '[href="/televizoare/c?ref=hp_menu_quick-nav_190_1&type=category"]',
            tv_accessories: '.sidebar-tree-subdepartment [href="/accesorii-tv/c?ref=search_menu_category"]'
        }
    }
}