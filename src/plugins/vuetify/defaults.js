export default {
    VContainer: {
        class: "lg:max-w-[1280px]",
    },
    IconBtn: {
        icon: true,
        color: "default",
        variant: "text",
    },
    VAlert: {
        density: "comfortable",
        VBtn: {
            color: undefined,
        },
    },
    VAvatar: {
        // ℹ️ Remove after next release
        variant: "flat",
    },

    // VImg: {
    //   eager: true,
    // },
    VBadge: {
        // set v-badge default color to primary
        color: "primary",
    },
    VBtn: {
        // set v-btn default color to primary
        color: "default",
        ripple: false,
    },
    VChip: {
        label: true,
    },
    VDataTable: {
        VPagination: {
            showFirstLastPage: true,
            firstIcon: "bx-chevrons-left",
            lastIcon: "bx-chevrons-right",
        },
    },
    VTable: {
        VCheckboxBtn: {
            density: "comfortable",
        },
    },
    VDataTableServer: {
        VPagination: {
            showFirstLastPage: true,
            firstIcon: "bx-chevrons-left",
            lastIcon: "bx-chevrons-right",
        },
    },
    //
    VList: {
        color: "primary",
        density: "compact",
        VCheckboxBtn: {
            density: "compact",
        },
        VListItem: {
            VAvatar: {
                size: 38,
            },
            VListItemTitle: {
                class: "text-sm font-medium",
            },
        },
    },
    VMenu: {
        offset: "2px",
    },
    VPagination: {
        density: "comfortable",
        variant: "tonal",
    },
    VTabs: {
        // set v-tabs default color to primary
        color: "primary",
        density: "comfortable",
        VSlideGroup: {
            showArrows: true,
        },
    },
    VCheckboxBtn: {
        color: "primary",
    },
    VCheckbox: {
        // set v-checkbox default color to primary
        color: "primary",
        density: "comfortable",
        hideDetails: "auto",
    },
    VRadioGroup: {
        color: "primary",
        density: "comfortable",
        hideDetails: "auto",
    },
    VRadio: {
        density: "comfortable",
        hideDetails: "auto",
    },
    //
    VSelect: {
        variant: "outlined",
        density: "compact",
        hideDetails: "auto",
        VChip: {
            label: true,
        },
    },
    VRating: {
        // set v-rating default color to primary
        activeColor: "warning",
        color: "disabled",
        emptyIcon: "bx-bxs-star",
    },
    //
    VTextField: {
        variant: "outlined",
        density: "compact",
        color: "primary",
        hideDetails: "auto",
    },
    VAutocomplete: {
        variant: "outlined",
        color: "primary",
        density: "comfortable",
        hideDetails: "auto",
        menuProps: {
            contentClass: "app-autocomplete__content v-autocomplete__content",
        },
        VChip: {
            label: true,
        },
    },
    VCombobox: {
        variant: "outlined",
        density: "comfortable",
        color: "primary",
        hideDetails: "auto",
        VChip: {
            label: true,
        },
    },
    VFileInput: {
        variant: "outlined",
        density: "comfortable",
        color: "primary",
        hideDetails: "auto",
        prependIcon: "",
        prependInnerIcon: "bx-link",
    },
    VTextarea: {
        variant: "outlined",
        density: "comfortable",
        color: "primary",
        hideDetails: "auto",
    },

    VNavigationDrawer: {
        touchless: true,
    },
};
