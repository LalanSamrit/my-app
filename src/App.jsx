import { useState, useMemo } from "react";

const COLORS = {
  income: "#22c55e",
  expense: "#ef4444",
  balance: "#3b82f6",
  food: "#f59e0b",
  transport: "#8b5cf6",
  entertainment: "#ec4899",
  shopping: "#06b6d4",
  health: "#10b981",
  utilities: "#f97316",
  salary: "#22c55e",
  freelance: "#34d399",
  investment: "#60a5fa",
  other: "#9ca3af",
};

const CATEGORIES = {
  Food: COLORS.food,
  Transport: COLORS.transport,
  Entertainment: COLORS.entertainment,
  Shopping: COLORS.shopping,
  Health: COLORS.health,
  Utilities: COLORS.utilities,
  Salary: COLORS.salary,
  Freelance: COLORS.freelance,
  Investment: COLORS.investment,
  Other: COLORS.other,
};

const INITIAL_TRANSACTIONS = [
  {
    id: 1,
    date: "2026-03-01",
    description: "Monthly Salary",
    amount: 85000,
    category: "Salary",
    type: "income",
  },
  {
    id: 2,
    date: "2026-03-02",
    description: "Grocery Store",
    amount: -3200,
    category: "Food",
    type: "expense",
  },
  {
    id: 3,
    date: "2026-03-04",
    description: "Uber Ride",
    amount: -450,
    category: "Transport",
    type: "expense",
  },
  {
    id: 4,
    date: "2026-03-05",
    description: "Netflix Subscription",
    amount: -799,
    category: "Entertainment",
    type: "expense",
  },
  {
    id: 5,
    date: "2026-03-06",
    description: "Freelance Project",
    amount: 25000,
    category: "Freelance",
    type: "income",
  },
  {
    id: 6,
    date: "2026-03-08",
    description: "Electricity Bill",
    amount: -2100,
    category: "Utilities",
    type: "expense",
  },
  {
    id: 7,
    date: "2026-03-10",
    description: "Amazon Purchase",
    amount: -1850,
    category: "Shopping",
    type: "expense",
  },
  {
    id: 8,
    date: "2026-03-12",
    description: "Doctor Visit",
    amount: -800,
    category: "Health",
    type: "expense",
  },
  {
    id: 9,
    date: "2026-03-14",
    description: "Restaurant Dinner",
    amount: -1200,
    category: "Food",
    type: "expense",
  },
  {
    id: 10,
    date: "2026-03-15",
    description: "Dividend Income",
    amount: 4500,
    category: "Investment",
    type: "income",
  },
  {
    id: 11,
    date: "2026-03-17",
    description: "Metro Pass",
    amount: -500,
    category: "Transport",
    type: "expense",
  },
  {
    id: 12,
    date: "2026-03-18",
    description: "Pharmacy",
    amount: -350,
    category: "Health",
    type: "expense",
  },
  {
    id: 13,
    date: "2026-03-19",
    description: "Online Course",
    amount: -2999,
    category: "Entertainment",
    type: "expense",
  },
  {
    id: 14,
    date: "2026-03-21",
    description: "Coffee Shop",
    amount: -280,
    category: "Food",
    type: "expense",
  },
  {
    id: 15,
    date: "2026-03-22",
    description: "Clothes Shopping",
    amount: -3500,
    category: "Shopping",
    type: "expense",
  },
  {
    id: 16,
    date: "2026-03-24",
    description: "Internet Bill",
    amount: -1199,
    category: "Utilities",
    type: "expense",
  },
  {
    id: 17,
    date: "2026-03-26",
    description: "Side Project Income",
    amount: 12000,
    category: "Freelance",
    type: "income",
  },
  {
    id: 18,
    date: "2026-03-28",
    description: "Movie Tickets",
    amount: -600,
    category: "Entertainment",
    type: "expense",
  },
  {
    id: 19,
    date: "2026-03-29",
    description: "Supermarket",
    amount: -2800,
    category: "Food",
    type: "expense",
  },
  {
    id: 20,
    date: "2026-03-31",
    description: "Gas Refill",
    amount: -700,
    category: "Transport",
    type: "expense",
  },
  {
    id: 21,
    date: "2026-02-01",
    description: "Monthly Salary",
    amount: 85000,
    category: "Salary",
    type: "income",
  },
  {
    id: 22,
    date: "2026-02-03",
    description: "Grocery Store",
    amount: -2900,
    category: "Food",
    type: "expense",
  },
  {
    id: 23,
    date: "2026-02-07",
    description: "Freelance Project",
    amount: 18000,
    category: "Freelance",
    type: "income",
  },
  {
    id: 24,
    date: "2026-02-10",
    description: "Electricity Bill",
    amount: -1950,
    category: "Utilities",
    type: "expense",
  },
  {
    id: 25,
    date: "2026-02-14",
    description: "Valentine's Dinner",
    amount: -2200,
    category: "Food",
    type: "expense",
  },
  {
    id: 26,
    date: "2026-02-18",
    description: "Dividend Income",
    amount: 4200,
    category: "Investment",
    type: "income",
  },
  {
    id: 27,
    date: "2026-02-20",
    description: "Online Shopping",
    amount: -4100,
    category: "Shopping",
    type: "expense",
  },
  {
    id: 28,
    date: "2026-02-25",
    description: "Gym Membership",
    amount: -1500,
    category: "Health",
    type: "expense",
  },
  {
    id: 29,
    date: "2026-01-01",
    description: "Monthly Salary",
    amount: 80000,
    category: "Salary",
    type: "income",
  },
  {
    id: 30,
    date: "2026-01-05",
    description: "New Year Celebration",
    amount: -3500,
    category: "Entertainment",
    type: "expense",
  },
  {
    id: 31,
    date: "2026-01-10",
    description: "Freelance Project",
    amount: 22000,
    category: "Freelance",
    type: "income",
  },
  {
    id: 32,
    date: "2026-01-15",
    description: "Medical Checkup",
    amount: -1200,
    category: "Health",
    type: "expense",
  },
  {
    id: 33,
    date: "2026-01-20",
    description: "Dividend Income",
    amount: 3800,
    category: "Investment",
    type: "income",
  },
  {
    id: 34,
    date: "2026-01-25",
    description: "Winter Clothing",
    amount: -5500,
    category: "Shopping",
    type: "expense",
  },
  {
    id: 35,
    date: "2026-01-28",
    description: "Grocery Store",
    amount: -3100,
    category: "Food",
    type: "expense",
  },
];

const fmt = (n) => `₹${Math.abs(n).toLocaleString("en-IN")}`;
const fmtSign = (n) => (n >= 0 ? "+" : "-") + fmt(n);

function MiniSparkline({ data, color, width = 120, height = 36 }) {
  if (!data || data.length < 2) return null;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const pts = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - ((v - min) / range) * height;
      return `${x},${y}`;
    })
    .join(" ");
  return (
    <svg width={width} height={height} style={{ display: "block" }}>
      <polyline
        points={pts}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DonutChart({ data, size = 140 }) {
  const total = data.reduce((s, d) => s + d.value, 0);
  const { slices } = data.reduce(
    (acc, d) => {
      const pct = d.value / total;
      const start = acc.cumulative * 2 * Math.PI - Math.PI / 2;
      const next = acc.cumulative + pct;
      const end = next * 2 * Math.PI - Math.PI / 2;
      const r = size / 2 - 10;
      const cx = size / 2,
        cy = size / 2;
      const x1 = cx + r * Math.cos(start),
        y1 = cy + r * Math.sin(start);
      const x2 = cx + r * Math.cos(end),
        y2 = cy + r * Math.sin(end);
      const large = pct > 0.5 ? 1 : 0;
      return {
        cumulative: next,
        slices: [
          ...acc.slices,
          {
            ...d,
            path: `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z`,
            pct,
          },
        ],
      };
    },
    { cumulative: 0, slices: [] },
  );
  return (
    <svg width={size} height={size}>
      {slices.map((s, i) => (
        <path key={i} d={s.path} fill={s.color} opacity={0.9} />
      ))}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={size / 2 - 30}
        fill="var(--bg-card)"
      />
    </svg>
  );
}

function BarChart({ data, height = 160 }) {
  const maxVal = Math.max(...data.map((d) => Math.max(d.income, d.expense)));
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        gap: 8,
        height,
        padding: "0 4px",
      }}
    >
      {data.map((d, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
            justifyContent: "flex-end",
            gap: 2,
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              gap: 2,
              alignItems: "flex-end",
              height: "85%",
            }}
          >
            <div
              style={{
                flex: 1,
                background: COLORS.income,
                borderRadius: "3px 3px 0 0",
                height: `${(d.income / maxVal) * 100}%`,
                opacity: 0.85,
              }}
            />
            <div
              style={{
                flex: 1,
                background: COLORS.expense,
                borderRadius: "3px 3px 0 0",
                height: `${(d.expense / maxVal) * 100}%`,
                opacity: 0.85,
              }}
            />
          </div>
          <span
            style={{
              fontSize: 10,
              color: "var(--color-text-secondary)",
              textAlign: "center",
            }}
          >
            {d.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const [role, setRole] = useState("viewer");
  const [transactions, setTransactions] = useState(INITIAL_TRANSACTIONS);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterCat, setFilterCat] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [sortDir, setSortDir] = useState("desc");
  const [activeView, setActiveView] = useState("dashboard");
  const [showAddForm, setShowAddForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [newTx, setNewTx] = useState({
    date: "",
    description: "",
    amount: "",
    category: "Food",
    type: "expense",
  });
  const [dark, setDark] = useState(false);

  const theme = {
    "--bg-app": dark ? "#0f0f14" : "#f4f3ef",
    "--bg-card": dark ? "#1a1a24" : "#ffffff",
    "--bg-sidebar": dark ? "#13131c" : "#1a1a2e",
    "--text-primary": dark ? "#e8e6df" : "#1a1a2e",
    "--text-secondary": dark ? "#8a8898" : "#6b6a7a",
    "--text-muted": dark ? "#4a4a5e" : "#b0afc0",
    "--border": dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.07)",
    "--accent": "#6c63ff",
    "--accent-muted": dark ? "rgba(108,99,255,0.15)" : "rgba(108,99,255,0.08)",
    "--gold": "#d4a017",
  };

  const currentMonthTxs = useMemo(
    () => transactions.filter((t) => t.date.startsWith("2026-03")),
    [transactions],
  );
  const totalIncome = useMemo(
    () =>
      currentMonthTxs
        .filter((t) => t.type === "income")
        .reduce((s, t) => s + t.amount, 0),
    [currentMonthTxs],
  );
  const totalExpense = useMemo(
    () =>
      currentMonthTxs
        .filter((t) => t.type === "expense")
        .reduce((s, t) => s + Math.abs(t.amount), 0),
    [currentMonthTxs],
  );
  const balance = useMemo(
    () => transactions.reduce((s, t) => s + t.amount, 0),
    [transactions],
  );

  const monthlyData = useMemo(() => {
    const months = ["2026-01", "2026-02", "2026-03"];
    return months.map((m) => {
      const txs = transactions.filter((t) => t.date.startsWith(m));
      const income = txs
        .filter((t) => t.type === "income")
        .reduce((s, t) => s + t.amount, 0);
      const expense = txs
        .filter((t) => t.type === "expense")
        .reduce((s, t) => s + Math.abs(t.amount), 0);
      return {
        label:
          m.slice(5) === "01" ? "Jan" : m.slice(5) === "02" ? "Feb" : "Mar",
        income,
        expense,
      };
    });
  }, [transactions]);

  const categorySpend = useMemo(() => {
    const map = {};
    transactions
      .filter((t) => t.type === "expense")
      .forEach((t) => {
        map[t.category] = (map[t.category] || 0) + Math.abs(t.amount);
      });
    return Object.entries(map)
      .map(([k, v]) => ({
        label: k,
        value: v,
        color: CATEGORIES[k] || COLORS.other,
      }))
      .sort((a, b) => b.value - a.value);
  }, [transactions]);

  const topCategory = categorySpend[0];
  const prevMonth = monthlyData[1],
    currMonth = monthlyData[2];
  const expenseDiff =
    currMonth && prevMonth
      ? (
          ((currMonth.expense - prevMonth.expense) / prevMonth.expense) *
          100
        ).toFixed(1)
      : 0;

  const balanceTrend = useMemo(() => {
    const sorted = [...transactions].sort((a, b) =>
      a.date.localeCompare(b.date),
    );
    return sorted.reduce((acc, t) => {
      const prev = acc.length ? acc[acc.length - 1] : 0;
      return [...acc, prev + t.amount];
    }, []);
  }, [transactions]);

  const filtered = useMemo(() => {
    let list = [...transactions];
    if (search)
      list = list.filter(
        (t) =>
          t.description.toLowerCase().includes(search.toLowerCase()) ||
          t.category.toLowerCase().includes(search.toLowerCase()),
      );
    if (filterType !== "all") list = list.filter((t) => t.type === filterType);
    if (filterCat !== "all")
      list = list.filter((t) => t.category === filterCat);
    list.sort((a, b) => {
      let va = a[sortBy],
        vb = b[sortBy];
      if (sortBy === "amount") {
        va = Math.abs(va);
        vb = Math.abs(vb);
      }
      return sortDir === "asc" ? (va > vb ? 1 : -1) : va < vb ? 1 : -1;
    });
    return list;
  }, [transactions, search, filterType, filterCat, sortBy, sortDir]);

  const handleAdd = () => {
    if (!newTx.date || !newTx.description || !newTx.amount) return;
    const amt = parseFloat(newTx.amount) * (newTx.type === "expense" ? -1 : 1);
    if (editId !== null) {
      setTransactions((prev) =>
        prev.map((t) =>
          t.id === editId ? { ...t, ...newTx, amount: amt } : t,
        ),
      );
      setEditId(null);
    } else {
      setTransactions((prev) => [
        ...prev,
        { id: Date.now(), ...newTx, amount: amt },
      ]);
    }
    setNewTx({
      date: "",
      description: "",
      amount: "",
      category: "Food",
      type: "expense",
    });
    setShowAddForm(false);
  };

  const handleEdit = (tx) => {
    setEditId(tx.id);
    setNewTx({
      date: tx.date,
      description: tx.description,
      amount: Math.abs(tx.amount).toString(),
      category: tx.category,
      type: tx.type,
    });
    setShowAddForm(true);
    setActiveView("transactions");
  };

  const handleDelete = (id) =>
    setTransactions((prev) => prev.filter((t) => t.id !== id));

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: "⬛" },
    { id: "transactions", label: "Transactions", icon: "⬜" },
    { id: "insights", label: "Insights", icon: "◈" },
  ];

  const cardStyle = {
    background: "var(--bg-card)",
    borderRadius: 16,
    border: "1px solid var(--border)",
    padding: "20px 24px",
  };

  const inputStyle = {
    background: dark ? "#22222e" : "#f8f7f4",
    border: "1px solid var(--border)",
    borderRadius: 10,
    padding: "10px 14px",
    color: "var(--text-primary)",
    fontSize: 14,
    width: "100%",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "'DM Sans', sans-serif",
  };

  const btnStyle = (variant = "primary") => ({
    padding: "10px 20px",
    borderRadius: 10,
    border: "none",
    cursor: "pointer",
    fontSize: 13,
    fontWeight: 600,
    fontFamily: "'DM Sans', sans-serif",
    background:
      variant === "primary"
        ? "var(--accent)"
        : variant === "danger"
          ? "#ef444420"
          : dark
            ? "#2a2a38"
            : "#f0eff8",
    color:
      variant === "primary"
        ? "#fff"
        : variant === "danger"
          ? "#ef4444"
          : "var(--text-primary)",
    transition: "all 0.15s",
  });

  return (
    <div
      style={{
        ...Object.fromEntries(Object.entries(theme)),
        fontFamily: "'DM Sans', sans-serif",
        background: "var(--bg-app)",
        color: "var(--text-primary)",
        minHeight: "100vh",
        display: "flex",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />

      {/* Sidebar */}
      <div
        style={{
          width: 220,
          background: "var(--bg-sidebar)",
          display: "flex",
          flexDirection: "column",
          padding: "28px 0",
          gap: 0,
          flexShrink: 0,
        }}
      >
        <div
          style={{
            padding: "0 24px 28px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.3px",
            }}
          >
            Finsight
          </div>
          <div
            style={{
              fontSize: 11,
              color: "rgba(255,255,255,0.35)",
              marginTop: 2,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
            }}
          >
            Finance Dashboard
          </div>
        </div>

        <div
          style={{
            padding: "20px 16px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            flex: 1,
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 12px",
                borderRadius: 10,
                background:
                  activeView === item.id
                    ? "rgba(108,99,255,0.2)"
                    : "transparent",
                border:
                  activeView === item.id
                    ? "1px solid rgba(108,99,255,0.3)"
                    : "1px solid transparent",
                color:
                  activeView === item.id ? "#a5a0ff" : "rgba(255,255,255,0.45)",
                cursor: "pointer",
                fontSize: 13,
                fontWeight: 500,
                textAlign: "left",
                transition: "all 0.15s",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              <span style={{ fontSize: 12 }}>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>

        <div
          style={{
            padding: "16px 16px 0",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div style={{ marginBottom: 8 }}>
            <div
              style={{
                fontSize: 10,
                color: "rgba(255,255,255,0.3)",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                marginBottom: 6,
              }}
            >
              Role
            </div>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              style={{
                width: "100%",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 8,
                padding: "8px 10px",
                color: "rgba(255,255,255,0.75)",
                fontSize: 12,
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              <option value="viewer">Viewer</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          {role === "admin" && (
            <div
              style={{
                fontSize: 10,
                color: "#6c63ff",
                background: "rgba(108,99,255,0.1)",
                borderRadius: 6,
                padding: "4px 8px",
                textAlign: "center",
              }}
            >
              Admin Access
            </div>
          )}
        </div>

        <div style={{ padding: "12px 16px" }}>
          <button
            onClick={() => setDark(!dark)}
            style={{
              width: "100%",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 8,
              padding: "8px",
              color: "rgba(255,255,255,0.5)",
              fontSize: 12,
              cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {dark ? "☀ Light" : "◑ Dark"} mode
          </button>
        </div>
      </div>

      {/* Main */}
      <div style={{ flex: 1, overflowY: "auto", padding: "28px 28px 40px" }}>
        {/* DASHBOARD VIEW */}
        {activeView === "dashboard" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div>
              <h1
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  margin: 0,
                  color: "var(--text-primary)",
                }}
              >
                Overview
              </h1>
              <p
                style={{
                  fontSize: 13,
                  color: "var(--text-secondary)",
                  margin: "4px 0 0",
                }}
              >
                March 2026 · All amounts in INR
              </p>
            </div>

            {/* Summary Cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: 16,
              }}
            >
              {[
                {
                  label: "Total Balance",
                  value: fmt(balance),
                  sub: "Across all time",
                  color: "#6c63ff",
                  trend: balanceTrend,
                },
                {
                  label: "Monthly Income",
                  value: fmt(totalIncome),
                  sub: "+vs last month",
                  color: COLORS.income,
                  trend: monthlyData.map((d) => d.income),
                },
                {
                  label: "Monthly Expenses",
                  value: fmt(totalExpense),
                  sub: `${expenseDiff}% vs Feb`,
                  color: COLORS.expense,
                  trend: monthlyData.map((d) => d.expense),
                },
                {
                  label: "Net Savings",
                  value: fmt(totalIncome - totalExpense),
                  sub: "This month",
                  color: COLORS.investment,
                  trend: null,
                },
              ].map((card, i) => (
                <div
                  key={i}
                  style={{
                    ...cardStyle,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      color: "var(--text-secondary)",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      marginBottom: 8,
                    }}
                  >
                    {card.label}
                  </div>
                  <div
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.5px",
                    }}
                  >
                    {card.value}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                      marginTop: 10,
                    }}
                  >
                    <span style={{ fontSize: 11, color: card.color }}>
                      {card.sub}
                    </span>
                    {card.trend && (
                      <MiniSparkline data={card.trend} color={card.color} />
                    )}
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      width: 4,
                      height: "100%",
                      background: card.color,
                      opacity: 0.5,
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Charts Row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
              }}
            >
              {/* Bar Chart */}
              <div style={cardStyle}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 16,
                  }}
                >
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>
                      Monthly Comparison
                    </div>
                    <div
                      style={{ fontSize: 11, color: "var(--text-secondary)" }}
                    >
                      Income vs Expenses
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 12, fontSize: 11 }}>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        color: "var(--text-secondary)",
                      }}
                    >
                      <span
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: 2,
                          background: COLORS.income,
                          display: "inline-block",
                        }}
                      />
                      Income
                    </span>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        color: "var(--text-secondary)",
                      }}
                    >
                      <span
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: 2,
                          background: COLORS.expense,
                          display: "inline-block",
                        }}
                      />
                      Expense
                    </span>
                  </div>
                </div>
                <BarChart data={monthlyData} />
              </div>

              {/* Donut Chart */}
              <div style={cardStyle}>
                <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>
                  Spending Breakdown
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "var(--text-secondary)",
                    marginBottom: 12,
                  }}
                >
                  By category · all time
                </div>
                <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                  <DonutChart data={categorySpend.slice(0, 6)} size={130} />
                  <div
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      gap: 6,
                    }}
                  >
                    {categorySpend.slice(0, 5).map((c, i) => {
                      const total = categorySpend.reduce(
                        (s, x) => s + x.value,
                        0,
                      );
                      return (
                        <div
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                          }}
                        >
                          <div
                            style={{
                              width: 8,
                              height: 8,
                              borderRadius: 2,
                              background: c.color,
                              flexShrink: 0,
                            }}
                          />
                          <div
                            style={{
                              flex: 1,
                              fontSize: 12,
                              color: "var(--text-secondary)",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {c.label}
                          </div>
                          <div
                            style={{
                              fontSize: 11,
                              fontWeight: 600,
                              color: "var(--text-primary)",
                            }}
                          >
                            {((c.value / total) * 100).toFixed(0)}%
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Transactions */}
            <div style={cardStyle}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 16,
                }}
              >
                <div style={{ fontSize: 13, fontWeight: 600 }}>
                  Recent Transactions
                </div>
                <button
                  onClick={() => setActiveView("transactions")}
                  style={{
                    ...btnStyle("ghost"),
                    padding: "6px 14px",
                    fontSize: 12,
                  }}
                >
                  View all →
                </button>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {transactions.slice(0, 5).map((tx) => (
                  <div
                    key={tx.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "10px 0",
                      borderBottom: "1px solid var(--border)",
                    }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        background:
                          (CATEGORIES[tx.category] || COLORS.other) + "20",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 14,
                      }}
                    >
                      {tx.category === "Food"
                        ? "🍽"
                        : tx.category === "Transport"
                          ? "🚗"
                          : tx.category === "Entertainment"
                            ? "🎬"
                            : tx.category === "Shopping"
                              ? "🛍"
                              : tx.category === "Health"
                                ? "💊"
                                : tx.category === "Utilities"
                                  ? "⚡"
                                  : tx.category === "Salary"
                                    ? "💼"
                                    : "💰"}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: 500 }}>
                        {tx.description}
                      </div>
                      <div
                        style={{ fontSize: 11, color: "var(--text-secondary)" }}
                      >
                        {tx.date} · {tx.category}
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: tx.amount > 0 ? COLORS.income : COLORS.expense,
                      }}
                    >
                      {fmtSign(tx.amount)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TRANSACTIONS VIEW */}
        {activeView === "transactions" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: 12,
              }}
            >
              <div>
                <h1 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>
                  Transactions
                </h1>
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--text-secondary)",
                    margin: "4px 0 0",
                  }}
                >
                  {filtered.length} records found
                </p>
              </div>
              {role === "admin" && (
                <button
                  onClick={() => {
                    setShowAddForm(!showAddForm);
                    setEditId(null);
                    setNewTx({
                      date: "",
                      description: "",
                      amount: "",
                      category: "Food",
                      type: "expense",
                    });
                  }}
                  style={btnStyle("primary")}
                >
                  {showAddForm ? "✕ Cancel" : "+ Add Transaction"}
                </button>
              )}
            </div>

            {/* Add/Edit Form */}
            {role === "admin" && showAddForm && (
              <div
                style={{
                  ...cardStyle,
                  background: dark ? "#1e1e2c" : "#f8f7ff",
                  border: "1px solid rgba(108,99,255,0.2)",
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    marginBottom: 14,
                    color: "var(--accent)",
                  }}
                >
                  {editId ? "Edit Transaction" : "New Transaction"}
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                    gap: 12,
                  }}
                >
                  <div>
                    <label
                      style={{
                        fontSize: 11,
                        color: "var(--text-secondary)",
                        display: "block",
                        marginBottom: 5,
                      }}
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      value={newTx.date}
                      onChange={(e) =>
                        setNewTx({ ...newTx, date: e.target.value })
                      }
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        fontSize: 11,
                        color: "var(--text-secondary)",
                        display: "block",
                        marginBottom: 5,
                      }}
                    >
                      Description
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Grocery Store"
                      value={newTx.description}
                      onChange={(e) =>
                        setNewTx({ ...newTx, description: e.target.value })
                      }
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        fontSize: 11,
                        color: "var(--text-secondary)",
                        display: "block",
                        marginBottom: 5,
                      }}
                    >
                      Amount (₹)
                    </label>
                    <input
                      type="number"
                      placeholder="0.00"
                      value={newTx.amount}
                      onChange={(e) =>
                        setNewTx({ ...newTx, amount: e.target.value })
                      }
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        fontSize: 11,
                        color: "var(--text-secondary)",
                        display: "block",
                        marginBottom: 5,
                      }}
                    >
                      Category
                    </label>
                    <select
                      value={newTx.category}
                      onChange={(e) =>
                        setNewTx({ ...newTx, category: e.target.value })
                      }
                      style={inputStyle}
                    >
                      {Object.keys(CATEGORIES).map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      style={{
                        fontSize: 11,
                        color: "var(--text-secondary)",
                        display: "block",
                        marginBottom: 5,
                      }}
                    >
                      Type
                    </label>
                    <select
                      value={newTx.type}
                      onChange={(e) =>
                        setNewTx({ ...newTx, type: e.target.value })
                      }
                      style={inputStyle}
                    >
                      <option value="expense">Expense</option>
                      <option value="income">Income</option>
                    </select>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-end" }}>
                    <button
                      onClick={handleAdd}
                      style={{ ...btnStyle("primary"), width: "100%" }}
                    >
                      {editId ? "Save Changes" : "Add"}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Filters */}
            <div style={{ ...cardStyle, padding: "14px 20px" }}>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <input
                  placeholder="Search transactions..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{ ...inputStyle, width: 220 }}
                />
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  style={{ ...inputStyle, width: 130 }}
                >
                  <option value="all">All Types</option>
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </select>
                <select
                  value={filterCat}
                  onChange={(e) => setFilterCat(e.target.value)}
                  style={{ ...inputStyle, width: 150 }}
                >
                  <option value="all">All Categories</option>
                  {Object.keys(CATEGORIES).map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
                <select
                  value={`${sortBy}-${sortDir}`}
                  onChange={(e) => {
                    const [s, d] = e.target.value.split("-");
                    setSortBy(s);
                    setSortDir(d);
                  }}
                  style={{ ...inputStyle, width: 160 }}
                >
                  <option value="date-desc">Date: Newest</option>
                  <option value="date-asc">Date: Oldest</option>
                  <option value="amount-desc">Amount: High</option>
                  <option value="amount-asc">Amount: Low</option>
                </select>
              </div>
            </div>

            {/* Table */}
            <div style={cardStyle}>
              {filtered.length === 0 ? (
                <div
                  style={{
                    textAlign: "center",
                    padding: "40px 0",
                    color: "var(--text-secondary)",
                  }}
                >
                  <div style={{ fontSize: 32, marginBottom: 8 }}>🔍</div>
                  <div style={{ fontSize: 14 }}>
                    No transactions match your filters
                  </div>
                </div>
              ) : (
                <div style={{ overflowX: "auto" }}>
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      fontSize: 13,
                    }}
                  >
                    <thead>
                      <tr style={{ borderBottom: "1px solid var(--border)" }}>
                        {[
                          "Date",
                          "Description",
                          "Category",
                          "Type",
                          "Amount",
                          ...(role === "admin" ? ["Actions"] : []),
                        ].map((h) => (
                          <th
                            key={h}
                            style={{
                              padding: "8px 12px",
                              textAlign:
                                h === "Amount" || h === "Actions"
                                  ? "right"
                                  : "left",
                              color: "var(--text-secondary)",
                              fontWeight: 500,
                              fontSize: 11,
                              textTransform: "uppercase",
                              letterSpacing: "0.5px",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {filtered.map((tx) => (
                        <tr
                          key={tx.id}
                          style={{
                            borderBottom: "1px solid var(--border)",
                            transition: "background 0.1s",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.background = dark
                              ? "rgba(255,255,255,0.03)"
                              : "rgba(0,0,0,0.02)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.background = "transparent")
                          }
                        >
                          <td
                            style={{
                              padding: "10px 12px",
                              color: "var(--text-secondary)",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {tx.date}
                          </td>
                          <td style={{ padding: "10px 12px", fontWeight: 500 }}>
                            {tx.description}
                          </td>
                          <td style={{ padding: "10px 12px" }}>
                            <span
                              style={{
                                background:
                                  (CATEGORIES[tx.category] || COLORS.other) +
                                  "20",
                                color: CATEGORIES[tx.category] || COLORS.other,
                                borderRadius: 6,
                                padding: "3px 10px",
                                fontSize: 11,
                                fontWeight: 600,
                              }}
                            >
                              {tx.category}
                            </span>
                          </td>
                          <td style={{ padding: "10px 12px" }}>
                            <span
                              style={{
                                background:
                                  tx.type === "income"
                                    ? "#22c55e20"
                                    : "#ef444420",
                                color:
                                  tx.type === "income"
                                    ? COLORS.income
                                    : COLORS.expense,
                                borderRadius: 6,
                                padding: "3px 10px",
                                fontSize: 11,
                                fontWeight: 600,
                              }}
                            >
                              {tx.type}
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "10px 12px",
                              textAlign: "right",
                              fontWeight: 700,
                              color:
                                tx.amount > 0 ? COLORS.income : COLORS.expense,
                              fontFamily: "'DM Mono', monospace",
                            }}
                          >
                            {fmtSign(tx.amount)}
                          </td>
                          {role === "admin" && (
                            <td
                              style={{
                                padding: "10px 12px",
                                textAlign: "right",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  gap: 6,
                                  justifyContent: "flex-end",
                                }}
                              >
                                <button
                                  onClick={() => handleEdit(tx)}
                                  style={{
                                    ...btnStyle("ghost"),
                                    padding: "4px 10px",
                                    fontSize: 11,
                                  }}
                                >
                                  Edit
                                </button>
                                <button
                                  onClick={() => handleDelete(tx.id)}
                                  style={{
                                    ...btnStyle("danger"),
                                    padding: "4px 10px",
                                    fontSize: 11,
                                  }}
                                >
                                  Delete
                                </button>
                              </div>
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* INSIGHTS VIEW */}
        {activeView === "insights" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div>
              <h1 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>
                Insights
              </h1>
              <p
                style={{
                  fontSize: 13,
                  color: "var(--text-secondary)",
                  margin: "4px 0 0",
                }}
              >
                Spending patterns & observations
              </p>
            </div>

            {/* Insight Cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 16,
              }}
            >
              <div
                style={{
                  ...cardStyle,
                  borderLeft: `3px solid ${COLORS.expense}`,
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    color: "var(--text-secondary)",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    marginBottom: 8,
                  }}
                >
                  Top Spending Category
                </div>
                <div style={{ fontSize: 20, fontWeight: 700 }}>
                  {topCategory?.label}
                </div>
                <div
                  style={{ fontSize: 13, color: COLORS.expense, marginTop: 4 }}
                >
                  {fmt(topCategory?.value || 0)} total spent
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "var(--text-secondary)",
                    marginTop: 6,
                  }}
                >
                  Highest across all time
                </div>
              </div>

              <div
                style={{
                  ...cardStyle,
                  borderLeft: `3px solid ${expenseDiff > 0 ? COLORS.expense : COLORS.income}`,
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    color: "var(--text-secondary)",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    marginBottom: 8,
                  }}
                >
                  Monthly Expense Change
                </div>
                <div style={{ fontSize: 20, fontWeight: 700 }}>
                  {expenseDiff > 0 ? "+" : ""}
                  {expenseDiff}%
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: expenseDiff > 0 ? COLORS.expense : COLORS.income,
                    marginTop: 4,
                  }}
                >
                  {expenseDiff > 0
                    ? "Spending increased"
                    : "Spending decreased"}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "var(--text-secondary)",
                    marginTop: 6,
                  }}
                >
                  Compared to February 2026
                </div>
              </div>

              <div
                style={{
                  ...cardStyle,
                  borderLeft: `3px solid ${COLORS.investment}`,
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    color: "var(--text-secondary)",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    marginBottom: 8,
                  }}
                >
                  Savings Rate (Mar)
                </div>
                <div style={{ fontSize: 20, fontWeight: 700 }}>
                  {(((totalIncome - totalExpense) / totalIncome) * 100).toFixed(
                    1,
                  )}
                  %
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: COLORS.investment,
                    marginTop: 4,
                  }}
                >
                  {fmt(totalIncome - totalExpense)} saved
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "var(--text-secondary)",
                    marginTop: 6,
                  }}
                >
                  Of monthly income
                </div>
              </div>

              <div
                style={{ ...cardStyle, borderLeft: `3px solid var(--accent)` }}
              >
                <div
                  style={{
                    fontSize: 11,
                    color: "var(--text-secondary)",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    marginBottom: 8,
                  }}
                >
                  Avg Transaction
                </div>
                <div style={{ fontSize: 20, fontWeight: 700 }}>
                  {fmt(
                    currentMonthTxs.reduce(
                      (s, t) => s + Math.abs(t.amount),
                      0,
                    ) / (currentMonthTxs.length || 1),
                  )}
                </div>
                <div
                  style={{ fontSize: 13, color: "var(--accent)", marginTop: 4 }}
                >
                  {currentMonthTxs.length} transactions
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "var(--text-secondary)",
                    marginTop: 6,
                  }}
                >
                  This month
                </div>
              </div>
            </div>

            {/* Category Breakdown Detail */}
            <div style={cardStyle}>
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 16 }}>
                Category Breakdown
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                {categorySpend.map((c, i) => {
                  const total = categorySpend.reduce((s, x) => s + x.value, 0);
                  const pct = (c.value / total) * 100;
                  return (
                    <div key={i}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: 5,
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                          }}
                        >
                          <div
                            style={{
                              width: 10,
                              height: 10,
                              borderRadius: 3,
                              background: c.color,
                            }}
                          />
                          <span style={{ fontSize: 13 }}>{c.label}</span>
                        </div>
                        <div style={{ display: "flex", gap: 16, fontSize: 13 }}>
                          <span style={{ color: "var(--text-secondary)" }}>
                            {pct.toFixed(1)}%
                          </span>
                          <span
                            style={{
                              fontWeight: 600,
                              fontFamily: "'DM Mono', monospace",
                            }}
                          >
                            {fmt(c.value)}
                          </span>
                        </div>
                      </div>
                      <div
                        style={{
                          height: 6,
                          background: dark
                            ? "rgba(255,255,255,0.06)"
                            : "rgba(0,0,0,0.06)",
                          borderRadius: 10,
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            height: "100%",
                            width: `${pct}%`,
                            background: c.color,
                            borderRadius: 10,
                            transition: "width 0.5s ease",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Monthly Summary Table */}
            <div style={cardStyle}>
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 14 }}>
                Monthly Summary
              </div>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: 13,
                }}
              >
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    {["Month", "Income", "Expenses", "Net", "Savings Rate"].map(
                      (h) => (
                        <th
                          key={h}
                          style={{
                            padding: "8px 12px",
                            textAlign: h === "Month" ? "left" : "right",
                            color: "var(--text-secondary)",
                            fontWeight: 500,
                            fontSize: 11,
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                          }}
                        >
                          {h}
                        </th>
                      ),
                    )}
                  </tr>
                </thead>
                <tbody>
                  {monthlyData.map((m, i) => (
                    <tr
                      key={i}
                      style={{ borderBottom: "1px solid var(--border)" }}
                    >
                      <td style={{ padding: "10px 12px", fontWeight: 600 }}>
                        {m.label} 2026
                      </td>
                      <td
                        style={{
                          padding: "10px 12px",
                          textAlign: "right",
                          color: COLORS.income,
                          fontFamily: "'DM Mono', monospace",
                        }}
                      >
                        +{fmt(m.income)}
                      </td>
                      <td
                        style={{
                          padding: "10px 12px",
                          textAlign: "right",
                          color: COLORS.expense,
                          fontFamily: "'DM Mono', monospace",
                        }}
                      >
                        -{fmt(m.expense)}
                      </td>
                      <td
                        style={{
                          padding: "10px 12px",
                          textAlign: "right",
                          color:
                            m.income - m.expense > 0
                              ? COLORS.income
                              : COLORS.expense,
                          fontWeight: 700,
                          fontFamily: "'DM Mono', monospace",
                        }}
                      >
                        {fmtSign(m.income - m.expense)}
                      </td>
                      <td style={{ padding: "10px 12px", textAlign: "right" }}>
                        <span
                          style={{
                            background: "var(--accent-muted)",
                            color: "var(--accent)",
                            borderRadius: 6,
                            padding: "3px 10px",
                            fontSize: 11,
                            fontWeight: 600,
                          }}
                        >
                          {(((m.income - m.expense) / m.income) * 100).toFixed(
                            1,
                          )}
                          %
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
