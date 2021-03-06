export const apiState = {
  isReading: 0,
  isCreating: 0,
  worksheets: {
    data: [
      {
        id: "6",
        type: "worksheets",
        links: { self: "/api/v1/worksheets/6" },
        attributes: { userId: 6, transferDay: "Monday" },
        relationships: {
          incomeItems: {
            links: {
              self: "/api/v1/worksheets/6/relationships/income-items",
              related: "/api/v1/worksheets/6/income-items"
            },
            data: [{ type: "incomeItems", id: "187" }]
          },
          zenAccounts: {
            links: {
              self: "/api/v1/worksheets/6/relationships/zen-accounts",
              related: "/api/v1/worksheets/6/zen-accounts"
            },
            data: [{ type: "zenAccounts", id: "19" }]
          }
        }
      }
    ]
  },
  expenseItems: {
    data: [
      {
        id: "1374",
        type: "expenseItems",
        links: { self: "/api/v1/expense-items/1374" },
        attributes: {
          name: "Land Tax",
          frequency: 1,
          amount: "100.0",
          nextDueAt: null
        },
        relationships: {
          zenAccount: {
            links: {
              self: "/api/v1/expense-items/1374/relationships/zen-account",
              related: "/api/v1/expense-items/1374/zen-account"
            }
          },
          pastBills: {
            links: {
              self: "/api/v1/expense-items/1374/relationships/past-bills",
              related: "/api/v1/expense-items/1374/past-bills"
            },
            data: [
              { type: "pastBills", id: "56591" },
              { type: "pastBills", id: "56592" },
              { type: "pastBills", id: "56593" },
              { type: "pastBills", id: "56594" }
            ]
          }
        }
      }
    ]
  },
  accountCategories: {
    data: [
      {
        id: "1",
        type: "accountCategories",
        links: { self: "/api/v1/account-categories/1" },
        attributes: { name: "Fixed" }
      }
    ]
  },
  zenAccounts: {
    data: [
      {
        id: "19",
        type: "zenAccounts",
        links: { self: "/api/v1/zen-accounts/19" },
        attributes: { name: "Fixed" },
        relationships: {
          expenseItems: {
            links: {
              self: "/api/v1/zen-accounts/19/relationships/expense-items",
              related: "/api/v1/zen-accounts/19/expense-items"
            },
            data: [{ type: "expenseItems", id: "1374" }]
          },
          accountCategory: {
            links: {
              self: "/api/v1/zen-accounts/19/relationships/account-category",
              related: "/api/v1/zen-accounts/19/account-category"
            },
            data: { type: "accountCategories", id: "1" }
          }
        }
      }
    ]
  },
  isUpdating: 0,
  isDeleting: 0,
  endpoint: {
    host: "http: //localhost:3000",
    path: "/api/v1",
    headers: {
      "Content-Type": "application/vnd.api+json",
      Accept: "application/vnd.api+json"
    }
  },
  incomeItems: {
    data: [
      {
        id: "187",
        type: "incomeItems",
        links: { self: "/api/v1/income-items/187" },
        attributes: {
          name: "Wages",
          frequency: 2,
          amount: "600.0",
          nextDueAt: null
        },
        relationships: {
          worksheet: {
            links: {
              self: "/api/v1/income-items/187/relationships/worksheet",
              related: "/api/v1/income-items/187/worksheet"
            }
          }
        }
      }
    ]
  },
  pastBills: {
    data: [
      {
        id: "56594",
        type: "pastBills",
        links: { self: "/api/v1/past-bills/56594" },
        attributes: { name: null, amount: null },
        relationships: {
          expenseItem: {
            links: {
              self: "/api/v1/past-bills/56594/relationships/expense-item",
              related: "/api/v1/past-bills/56594/expense-item"
            }
          }
        }
      },
      {
        id: "56593",
        type: "pastBills",
        links: { self: "/api/v1/past-bills/56593" },
        attributes: { name: null, amount: null },
        relationships: {
          expenseItem: {
            links: {
              self: "/api/v1/past-bills/56593/relationships/expense-item",
              related: "/api/v1/past-bills/56593/expense-item"
            }
          }
        }
      },
      {
        id: "56592",
        type: "pastBills",
        links: { self: "/api/v1/past-bills/56592" },
        attributes: { name: null, amount: null },
        relationships: {
          expenseItem: {
            links: {
              self: "/api/v1/past-bills/56592/relationships/expense-item",
              related: "/api/v1/past-bills/56592/expense-item"
            }
          }
        }
      },
      {
        id: "56591",
        type: "pastBills",
        links: { self: "/api/v1/past-bills/56591" },
        attributes: { name: null, amount: null },
        relationships: {
          expenseItem: {
            links: {
              self: "/api/v1/past-bills/56591/relationships/expense-item",
              related: "/api/v1/past-bills/56591/expense-item"
            }
          }
        }
      }
    ]
  }
};

export const patchedResource = {
  data: {
    id: "1374",
    type: "expenseItems",
    links: { self: "http: //localhost:3000/api/v1/expense-items/1374" },
    attributes: {
      name: "Land Tax",
      frequency: 1,
      amount: "700.0",
      nextDueAt: null
    },
    relationships: {
      zenAccount: {
        links: {
          self:
            "http: //localhost:3000/api/v1/expense-items/1374/relationships/zen-account",
          related:
            "http: //localhost:3000/api/v1/expense-items/1374/zen-account"
        },
        data: { type: "zenAccounts", id: "19" }
      },
      pastBills: {
        links: {
          self:
            "http: //localhost:3000/api/v1/expense-items/1374/relationships/past-bills",
          related: "http: //localhost:3000/api/v1/expense-items/1374/past-bills"
        }
      }
    }
  }
};
