export default defineAppConfig({
    title: 'Pet Dating',
    theme: {
        colors: {
            primary: '#ff0000',
            rose: "#FB7185"
        }
    },
    ui: {
        selectMenu: {
            option: {
                color: 'text-rose-900 dark:text-rose-300',
                icon: {
                    active: 'text-rose-900 dark:text-rose-300',
                    inactive: 'text-rose-400 dark:text-rose-500',
                },
                selected: 'text-rose-900 dark:text-rose-300',
                selectedIcon: {
                    base: 'text-rose-900 dark:text-rose-300'
                },
            },
            label: 'text-rose-900 dark:text-rose-300'
        }
    }
})