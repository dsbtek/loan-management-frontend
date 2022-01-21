export const defaultValue = '';


// TO DO use themes
export const tableStyles = {
    rows: {
        style: {
            // minHeight: '72px', // override the row height
        },
    },
    headCells: {
        style: {
            marginTop: '7px',
            marginBottom: '7px',
            paddingLeft: '8px',
            // paddingRight: '8px',
            borderRightWidth: '2px',
            borderRightStyle: 'solid',
            // borderRadius: '10%',
            // borderRightWidth: 'thin',
            borderColor: 'gray'
        },
    },
    head: {
        style: {
            // color: theme.text.primary,
            fontSize: '12px',
            fontWeight: 700,
        },
    },
    headRow:{
        style: {
            // backgroundColor: theme.background.default,
            minHeight: '40px',
            borderBottomWidth: '3px',
            borderBottomStyle: 'solid',
            // backgroundColor: '#DCDFE6',
            backgroundColor: '#FAFAFA',
        },
    },
    cells: {
        style: {
            paddingLeft: '10px',
            paddingRight: '10px',
            wordBreak: 'normal',
        },
        draggingStyle: {},
    },
};