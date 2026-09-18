/* Accounting track — Topics 09–19 */
(function ({ mc, tf, dc, fill, je, match, order, unit }) {
const T = "accounting";

unit(T, "t09", "09. Financial Statements", "How the five statements connect; what they show and don't show", [
  ["Overview & Articulation", "Net income → Retained Earnings → Balance Sheet. Ending cash on the cash flow statement = cash on the balance sheet. Statements 'articulate' — they tie together.", [
    mc("Which set is the complete package of external financial statements under U.S. GAAP?", ["Balance sheet & income statement", "Income statement, statement of comprehensive income, balance sheet, cash flow statement, statement of stockholders' equity", "Trial balance & ledger", "Budget & forecast"], 1, "Plus the notes, which are an integral part."),
    fill("Beginning retained earnings $410,000; net income $96,000; dividends declared $30,000. Ending retained earnings?", 476000, "410,000 + 96,000 − 30,000 = $476,000."),
    fill("Total assets end of year $1,200,000; total liabilities $700,000; paid-in capital $150,000. Retained earnings?", 350000, "Equity 500,000 − paid-in 150,000 = $350,000."),
    mc("Ending cash on the statement of cash flows must equal…", ["Net income", "Cash on the balance sheet at the same date", "Operating cash flow", "Retained earnings"], 1, "Articulation between statements."),
    tf("The balance sheet reports the current market value of the company.", false, "Mostly historical cost; intangibles like brand and workforce aren't recorded. Market cap ≠ book equity."),
    mc("Comprehensive income equals…", ["Net income + other comprehensive income", "Revenues − expenses", "Operating income", "Net income − dividends"], 0, "OCI includes unrealized AFS gains, FX translation, pension adjustments, cash-flow-hedge gains."),
    order("Put the statements in the order they're typically prepared", ["Income statement", "Statement of stockholders' equity (retained earnings)", "Balance sheet", "Statement of cash flows"], "You need net income for equity, ending equity for the balance sheet, and two balance sheets for cash flows."),
    mc("A material event that occurs after year end but before statements are issued (e.g., a major fire) is…", ["Recorded as an expense in the prior year", "Disclosed in the notes (nonrecognized subsequent event)", "Ignored", "Recorded in OCI"], 1, "The condition did not exist at the balance sheet date → disclose, don't adjust."),
    mc("Which is NOT a limitation of financial statements?", ["Use of estimates", "Historical cost basis", "Omission of internally generated intangibles", "They are prepared using GAAP"], 3, "Following GAAP is a strength; the others are inherent limitations."),
  ]],
  ["Building a Set of Statements", "From an adjusted trial balance, sort every account: revenues/expenses to the income statement; assets/liabilities/equity to the balance sheet.", [
    fill("Adjusted TB: Sales 500,000; COGS 300,000; Operating expenses 120,000; Interest expense 10,000; Income tax 21,000. Net income?", 49000, "500 − 300 − 120 − 10 − 21 = $49,000."),
    fill("From the same data, gross profit?", 200000, "Sales − COGS = $200,000 (40% gross margin)."),
    fill("From the same data, operating income?", 80000, "Gross profit 200,000 − operating expenses 120,000 = $80,000."),
    fill("Cash 30; A/R 70; Inventory 100; Equipment (net) 300; A/P 60; Notes payable (long-term) 200; Common stock 100. Retained earnings? (in thousands)", 140, "Assets 500 − liabilities 260 − stock 100 = 140.", { unit: "K" }),
    mc("Where does Dividends Payable appear?", ["Income statement", "Current liabilities", "Equity", "Cash flow – operating"], 1, "Declared but unpaid dividends are a current liability."),
    mc("Interest expense on a multiple-step income statement appears…", ["Within cost of goods sold", "Within operating expenses", "In the non-operating (other expense) section", "It is not shown"], 2, "Financing costs are non-operating."),
    mc("A prior-period error discovered this year is corrected by…", ["Adjusting current-year expense", "Restating prior statements and adjusting beginning retained earnings", "Disclosing only", "Recording in OCI"], 1, "ASC 250: prior-period adjustments, net of tax, to opening retained earnings."),
    tf("Notes to the financial statements are optional supplementary information.", false, "They're an integral part; auditors' opinions cover them."),
  ]],
]);

unit(T, "t10", "10. Balance Sheet", "Classification, measurement, and reading a balance sheet like an analyst", [
  ["Classified Balance Sheet", "Current assets (converted to cash within 1 yr/operating cycle), long-term investments, PP&E, intangibles, other; current vs. long-term liabilities; equity sections.", [
    match("Match the item to its balance sheet classification", [["Prepaid insurance (8 months)", "Current asset"], ["Land held for future plant", "Long-term investment"], ["Patent", "Intangible asset"], ["Current portion of mortgage", "Current liability"], ["Bonds payable due in 2035", "Long-term liability"], ["Treasury stock", "Stockholders' equity (contra)"]], "Classification drives liquidity ratios and loan covenants."),
    mc("A $120,000 note payable due in 3 years with $24,000 principal due each year. Amount classified as current?", ["$0", "$24,000", "$96,000", "$120,000"], 1, "Current portion of long-term debt = principal due within 12 months."),
    mc("Inventory is a current asset even for a winery whose product ages for 3 years because…", ["Wine is liquid", "The operating cycle exceeds one year", "It's an exception in GAAP", "Inventory is always long-term"], 1, "Current = within one year OR the operating cycle, whichever is longer."),
    mc("Which is reported at fair value on the balance sheet under GAAP?", ["Land", "Trading debt securities", "Inventory", "Equipment"], 1, "Trading securities are marked to market through net income."),
    mc("Accounts receivable is reported at…", ["Gross amount", "Net realizable value (gross less allowance)", "Cash received", "Fair value each quarter"], 1, "Net of the allowance for doubtful accounts."),
    tf("A company's balance sheet shows the value it would receive if it sold the business.", false, "Book value ≠ market value. Many valuable resources (brands, employees, customer lists) are not recorded."),
    mc("Goodwill appears on the balance sheet only when…", ["The company has a strong reputation", "A business is acquired for more than the fair value of its identifiable net assets", "It is internally developed", "Sales exceed $1M"], 1, "Internally generated goodwill is never recorded."),
    mc("An operating lease with a 5-year term is now reported (ASC 842) as…", ["Nothing on the balance sheet", "A right-of-use asset and a lease liability", "Equipment and notes payable", "Prepaid rent only"], 1, "ASC 842 brought most leases onto the balance sheet."),
    mc("Where does Accumulated Other Comprehensive Income appear?", ["Current assets", "Long-term liabilities", "Stockholders' equity", "Income statement"], 2, "AOCI is an equity component separate from retained earnings."),
  ]],
  ["Analyzing the Balance Sheet", "Compare across periods and to peers. Watch quality of assets, hidden liabilities, and the relationship between growth in receivables/inventory and sales.", [
    fill("Current assets $360,000; current liabilities $240,000. Current ratio? (2 decimals)", 1.5, "1.50 — but composition matters: inventory-heavy current assets are less liquid.", { unit: "x", tol: 0.01 }),
    fill("Cash 40,000; marketable securities 20,000; A/R 90,000; inventory 210,000; current liabilities 240,000. Quick (acid-test) ratio? (2 decimals)", 0.63, "(40 + 20 + 90) ÷ 240 = 0.625 ≈ 0.63. Inventory is excluded.", { unit: "x", tol: 0.01 }),
    fill("Total liabilities $700,000; total equity $500,000. Debt-to-equity ratio? (2 decimals)", 1.4, "700 ÷ 500 = 1.40.", { unit: "x", tol: 0.01 }),
    mc("Receivables grew 40% while sales grew 5%. A likely interpretation?", ["Improved collections", "Deteriorating collections or aggressive revenue recognition — investigate", "Nothing notable", "Inventory obsolescence"], 1, "Receivables outpacing sales is a classic red flag."),
    mc("A company reclassifies long-term debt as current when…", ["Interest rates rise", "It violates a covenant and the lender can demand repayment (unless waived)", "It refinances", "It pays dividends"], 1, "ASC 470: callable obligations are current unless a waiver/grace period is obtained."),
    mc("Book value per share equals…", ["Market price ÷ shares", "Common stockholders' equity ÷ common shares outstanding", "Total assets ÷ shares", "Net income ÷ shares"], 1, "Preferred equity is subtracted first."),
    tf("Off-balance-sheet items such as purchase commitments and guarantees must still be disclosed in the notes.", true, "Full disclosure — analysts read the notes for commitments and contingencies."),
    mc("Working capital of a company is NEGATIVE. This is…", ["Always a sign of imminent bankruptcy", "Sometimes normal (e.g., grocery/restaurant chains with fast inventory turnover and customer cash up front)", "Impossible", "Required by GAAP"], 1, "Context matters: negative working capital can be a sign of efficiency in certain models."),
  ]],
]);

unit(T, "t11", "11. Working Capital and Liquidity", "Managing the cash conversion cycle and liquidity risk", [
  ["Working Capital Management", "Working capital = current assets − current liabilities. Cash conversion cycle = DIO + DSO − DPO. Shorter is generally better.", [
    fill("Current assets $820,000; current liabilities $560,000. Working capital?", 260000, "820,000 − 560,000 = $260,000."),
    fill("Inventory turnover is 8 times per year. Days inventory outstanding (DIO)? (use 365, round)", 46, "365 ÷ 8 ≈ 45.6 → 46 days.", { unit: "days", tol: 1 }),
    fill("Credit sales $1,460,000; average A/R $160,000. Days sales outstanding (DSO)?", 40, "A/R turnover = 9.125; 365 ÷ 9.125 = 40 days.", { unit: "days", tol: 0.6 }),
    fill("COGS $912,500; average A/P $100,000. Days payables outstanding (DPO)?", 40, "912,500 ÷ 100,000 = 9.125 turns → 40 days.", { unit: "days", tol: 0.6 }),
    fill("DIO 46, DSO 40, DPO 40. Cash conversion cycle?", 46, "46 + 40 − 40 = 46 days of financing needed.", { unit: "days", tol: 0.6 }),
    mc("Which action SHORTENS the cash conversion cycle?", ["Offering 60-day instead of 30-day terms", "Negotiating longer payment terms with suppliers", "Holding more safety stock", "Paying suppliers early"], 1, "Higher DPO reduces the cycle (within reason — don't lose discounts or supplier goodwill)."),
    mc("A supplier offers 2/10, n/30. Approximate annualized cost of NOT taking the discount?", ["2%", "12%", "24%", "37%"], 3, "2/98 × 365/20 ≈ 37.2%. Almost always take the discount, even borrowing to do so."),
    mc("Which is the most liquid asset after cash?", ["Inventory", "Marketable securities", "Prepaid expenses", "Equipment"], 1, "Marketable securities can be converted quickly at known values."),
    tf("A high current ratio is always good.", false, "Excessively high may mean idle cash, bloated inventory, or slow receivables."),
    mc("Operating cash flow ratio = ", ["Net income ÷ current liabilities", "Cash from operations ÷ current liabilities", "Current assets ÷ cash", "Sales ÷ working capital"], 1, "It measures the ability to cover current obligations from operations."),
  ]],
]);

unit(T, "t12", "12. Income Statement", "Formats, revenue recognition (ASC 606), and quality of earnings", [
  ["Format & Content", "Multiple-step: Sales → Gross profit → Operating income → Pretax income → Net income. Discontinued operations shown net of tax below continuing operations.", [
    fill("Sales $900,000; sales returns $20,000; sales discounts $10,000. Net sales?", 870000, "900 − 20 − 10 = $870,000."),
    fill("Net sales $870,000; COGS $522,000. Gross margin percentage? (1 decimal)", 40, "(870 − 522) ÷ 870 = 40.0%.", { unit: "%", tol: 0.1 }),
    mc("A loss from discontinued operations is presented…", ["Within operating expenses", "Below income from continuing operations, net of tax", "In OCI", "In the notes only"], 1, "Separate presentation helps users predict future earnings."),
    mc("Under ASC 606, revenue is recognized when…", ["Cash is received", "Control of the good/service transfers to the customer", "The contract is signed", "The invoice is issued"], 1, "The five-step model: contract, performance obligations, transaction price, allocate, recognize when/as obligations are satisfied."),
    order("Put the ASC 606 five steps in order", ["Identify the contract", "Identify performance obligations", "Determine the transaction price", "Allocate the price to performance obligations", "Recognize revenue when/as each obligation is satisfied"], "Contract → obligations → price → allocate → recognize."),
    fill("A software bundle sells for $1,200: license (standalone $1,000) + 1-year support (standalone $500). Revenue allocated to the license?", 800, "1,200 × 1,000/1,500 = $800; support gets $400 recognized over the year."),
    mc("Company acts as an agent (e.g., marketplace taking 10% commission on $1,000 sales). Revenue reported?", ["$1,000", "$100", "$900", "$1,100"], 1, "Agents report net commission; principals report gross."),
    mc("Extraordinary items under U.S. GAAP are…", ["Shown after discontinued operations", "No longer permitted (eliminated by ASU 2015-01)", "Shown in OCI", "Required for natural disasters"], 1, "Unusual/infrequent items are disclosed but reported within continuing operations."),
    fill("Net income $49,000; preferred dividends $4,000; weighted average common shares 30,000. Basic EPS? (2 decimals)", 1.5, "(49,000 − 4,000) ÷ 30,000 = $1.50.", { tol: 0.01 }),
  ]],
  ["Quality of Earnings", "Persistent, cash-backed, conservatively measured earnings are 'high quality'. Watch one-time gains, aggressive estimates, and the gap between net income and operating cash flow.", [
    mc("Net income $2M; operating cash flow $0.3M for three years running. Most likely concern?", ["Nothing — normal", "Low earnings quality: possible aggressive revenue recognition or capitalizing costs", "Too much cash", "Excess depreciation"], 1, "Persistent large gap between accruals-based income and cash is a red flag."),
    mc("Which change would boost current earnings but is a quality concern?", ["Shortening depreciation lives", "Lengthening depreciation lives", "Increasing the bad-debt allowance", "Writing down inventory"], 1, "Longer lives lower annual depreciation expense — an estimate change that flatters income."),
    mc("EBITDA excludes…", ["Cost of goods sold", "Interest, taxes, depreciation, and amortization", "Salaries", "Rent"], 1, "Non-GAAP measure — useful for comparing operations but ignores real capital costs."),
    tf("A gain on the sale of a building is part of operating income for a retailer.", false, "It's non-operating (other income) — non-recurring and outside core operations."),
    mc("Capitalizing routine maintenance costs instead of expensing them…", ["Is conservative", "Overstates assets and current income", "Reduces net income", "Has no effect"], 1, "A classic earnings-management technique (WorldCom)."),
    fill("Operating income $80,000; interest expense $10,000. Times interest earned? (1 decimal)", 8, "80,000 ÷ 10,000 = 8.0×.", { unit: "x", tol: 0.1 }),
    mc("Channel stuffing (shipping excess product to distributors at quarter end) tends to…", ["Increase receivables and later returns; inflate current revenue", "Reduce revenue", "Improve cash flow", "Reduce inventory permanently"], 0, "Watch for receivables growth + subsequent returns/discounts."),
    mc("Which ratio best captures how much of each sales dollar becomes profit?", ["Current ratio", "Net profit margin", "Debt ratio", "Asset turnover"], 1, "Net income ÷ net sales."),
  ]],
]);

unit(T, "t13", "13. Cash Flow Statement", "Indirect method, classification, and reading the cash story", [
  ["Indirect Method Mechanics", "Start with net income. Add back non-cash expenses (depreciation, amortization, losses). Subtract gains. Adjust for changes in operating working capital: ↑ in operating asset = −, ↑ in operating liability = +.", [
    match("Classify each cash flow", [["Cash paid to suppliers", "Operating"], ["Purchase of equipment", "Investing"], ["Proceeds from issuing bonds", "Financing"], ["Dividends paid", "Financing"], ["Interest paid (U.S. GAAP)", "Operating"], ["Sale of a long-term investment", "Investing"]], "Under U.S. GAAP, interest paid/received and dividends received are operating; dividends paid are financing."),
    fill("Net income $49,000; depreciation $22,000; gain on sale of equipment $5,000; A/R increased $8,000; inventory decreased $4,000; A/P decreased $6,000. Cash from operations?", 56000, "49 + 22 − 5 − 8 + 4 − 6 = $56,000."),
    mc("An increase in Accounts Receivable is…", ["Added to net income", "Subtracted from net income", "An investing inflow", "Ignored"], 1, "Sales were recorded that haven't been collected — less cash than income."),
    mc("An increase in Accounts Payable is…", ["Subtracted", "Added to net income", "A financing inflow", "Ignored"], 1, "Expenses recorded but not yet paid — cash retained."),
    mc("Why is depreciation added back?", ["It generates cash", "It was subtracted in computing net income but required no cash outlay", "It's a financing item", "It's a tax deduction"], 1, "Depreciation is a non-cash expense."),
    fill("Equipment with cost $40,000 and accumulated depreciation $30,000 was sold for $15,000. Investing inflow reported?", 15000, "The full proceeds ($15,000) are investing; the $5,000 gain is removed from operating."),
    mc("A company purchases a building by signing a $500,000 mortgage (no cash). This is…", ["Investing outflow and financing inflow", "A noncash investing and financing activity disclosed separately", "Operating", "Not reported"], 1, "Noncash activities are disclosed in a supplemental schedule."),
    fill("Beginning cash $30,000; operating +56,000; investing −70,000; financing +14,000. Ending cash?", 30000, "30 + 56 − 70 + 14 = $30,000."),
    fill("Cash from operations $56,000; capital expenditures $70,000. Free cash flow?", -14000, "FCF = CFO − CapEx = −$14,000. Negative FCF may be fine for a growth company but not indefinitely."),
  ]],
  ["Reading the Cash Story", "Patterns matter: a mature company shows +CFO, −CFI, −CFF. A startup shows −CFO, −CFI, +CFF. A company in trouble may show +CFI (selling assets) to fund −CFO.", [
    mc("Positive operating, negative investing, negative financing cash flows typically describe a…", ["Startup", "Mature, healthy company reinvesting and returning capital", "Company in liquidation", "Company in distress"], 1, "Classic healthy pattern."),
    mc("Negative operating cash flow funded by asset sales (positive investing) suggests…", ["Strong growth", "Financial distress — the company is consuming itself", "Normal seasonality", "A share buyback"], 1, "Unsustainable pattern."),
    mc("Under the DIRECT method, operating cash flows are presented as…", ["Net income plus adjustments", "Gross cash receipts and payments (customers, suppliers, employees)", "Only totals", "Investing items"], 1, "Direct method is encouraged by FASB but rarely used; a reconciliation to net income is still required."),
    fill("Sales $870,000; A/R increased from $60,000 to $85,000. Cash collected from customers (direct method)?", 845000, "870,000 − 25,000 increase in A/R = $845,000."),
    fill("COGS $522,000; inventory increased $12,000; A/P increased $9,000. Cash paid to suppliers?", 525000, "522 + 12 (bought more than sold) − 9 (didn't pay yet) = $525,000."),
    tf("Stock-based compensation expense is added back to net income in the operating section.", true, "It's a non-cash expense, like depreciation."),
    mc("Income taxes paid are classified as…", ["Financing", "Investing", "Operating", "Noncash"], 2, "U.S. GAAP puts all income taxes in operating."),
    mc("Cash flow per share is…", ["Required by GAAP", "Prohibited from being reported on the face of the statements under U.S. GAAP", "Equal to EPS", "Reported in OCI"], 1, "FASB prohibits reporting cash flow per share to avoid confusion with EPS."),
  ]],
]);

unit(T, "t14", "14. Financial Ratios", "Liquidity, activity, profitability, leverage — and DuPont analysis", [
  ["Computing the Ratios", "Always use averages for balance-sheet amounts in turnover ratios. Compare with prior periods and industry peers; a ratio alone means little.", [
    fill("Net income $49,000; average total assets $980,000. Return on assets? (1 decimal)", 5, "49 ÷ 980 = 5.0%.", { unit: "%", tol: 0.1 }),
    fill("Net income $49,000; average stockholders' equity $490,000. Return on equity?", 10, "49 ÷ 490 = 10.0%.", { unit: "%", tol: 0.1 }),
    fill("Net sales $870,000; average total assets $980,000. Asset turnover? (2 decimals)", 0.89, "870 ÷ 980 = 0.888 ≈ 0.89×.", { unit: "x", tol: 0.01 }),
    fill("COGS $522,000; beginning inventory $95,000; ending inventory $105,000. Inventory turnover? (2 decimals)", 5.22, "522 ÷ average 100 = 5.22×.", { unit: "x", tol: 0.02 }),
    fill("Total liabilities $700,000; total assets $1,200,000. Debt ratio? (1 decimal)", 58.3, "700 ÷ 1,200 = 58.3%.", { unit: "%", tol: 0.1 }),
    fill("Market price $27; EPS $1.50. Price-earnings ratio?", 18, "27 ÷ 1.50 = 18×.", { unit: "x", tol: 0.05 }),
    fill("Dividends per share $0.60; EPS $1.50. Payout ratio?", 40, "0.60 ÷ 1.50 = 40%.", { unit: "%", tol: 0.1 }),
    match("Match the ratio to its category", [["Quick ratio", "Liquidity"], ["Receivables turnover", "Activity/efficiency"], ["Gross margin %", "Profitability"], ["Times interest earned", "Solvency/leverage"], ["P/E ratio", "Market"]], "Group ratios by the question they answer."),
  ]],
  ["Interpreting Ratios & DuPont", "ROE = Net margin × Asset turnover × Equity multiplier. Decompose to see whether returns come from margins, efficiency, or leverage.", [
    fill("Net margin 5.63%; asset turnover 0.888; equity multiplier 2.0. ROE via DuPont? (1 decimal)", 10, "0.0563 × 0.888 × 2.0 = 0.100 → 10.0%.", { unit: "%", tol: 0.2 }),
    mc("Two companies have the same ROE of 15%. Company A: margin 10%, turnover 1.5, multiplier 1.0. Company B: margin 2%, turnover 2.5, multiplier 3.0. Which is riskier?", ["A", "B — its return relies heavily on leverage", "Same risk", "Cannot tell"], 1, "High equity multiplier = high debt; ROE is boosted by leverage, magnifying downside too."),
    mc("A falling inventory turnover with steady sales most likely signals…", ["Better efficiency", "Inventory build-up / potential obsolescence", "Higher prices", "Lower COGS"], 1, "Inventory growing faster than sales."),
    mc("A company's gross margin rose from 38% to 45% while net margin fell. Likely explanation?", ["Lower COGS", "Operating expenses (SG&A, R&D) or interest/taxes grew faster than gross profit", "Higher sales", "Nothing unusual"], 1, "Decompose the income statement to locate the pressure."),
    mc("Which ratio would a bank lender weigh MOST when deciding on a 5-year term loan?", ["P/E ratio", "Debt service coverage ratio", "Dividend yield", "Asset turnover"], 1, "DSCR = cash available for debt service ÷ required principal + interest."),
    tf("Ratios computed from year-end balances can be distorted by seasonality — averages or monthly data are better.", true, "A retailer's Dec 31 inventory and payables are not representative of the year."),
    mc("Return on assets is 5% and the after-tax cost of debt is 4%. Adding debt would…", ["Reduce ROE", "Increase ROE (favorable leverage) — with added risk", "Not affect ROE", "Violate GAAP"], 1, "When ROA > after-tax cost of debt, leverage magnifies ROE."),
    mc("Which is a limitation of ratio analysis?", ["Ratios use audited data", "Different accounting methods (LIFO vs FIFO, leasing) impair comparability", "Ratios are too precise", "Ratios are required by GAAP"], 1, "Normalize for accounting policy differences before comparing companies."),
  ]],
]);

unit(T, "t15", "15. Bank Reconciliation", "Timing differences, book adjustments, and cash controls", [
  ["Preparing the Reconciliation", "Bank side: + deposits in transit, − outstanding checks, ± bank errors. Book side: + interest & collections by bank, − service charges & NSF, ± book errors. Only book-side items get journal entries.", [
    match("Which side does each item adjust?", [["Deposit in transit", "Bank side"], ["Outstanding checks", "Bank side"], ["NSF customer check", "Book side"], ["Bank service charge", "Book side"], ["Note collected by bank", "Book side"], ["Bank charged another company's check to our account", "Bank side"]], "Bank-side items are things the bank hasn't seen yet or got wrong."),
    fill("Bank balance $24,860; deposits in transit $3,150; outstanding checks $5,410; bank error (our $200 deposit credited to another account) . Adjusted bank balance?", 22800, "24,860 + 3,150 − 5,410 + 200 = $22,800."),
    fill("Book balance $22,435; bank collected a $1,000 note + $20 interest; service charge $35; NSF check $560; check #1044 for $890 was recorded in the books as $980. Adjusted book balance?", 22950, "22,435 + 1,020 − 35 − 560 + 90 = $22,950. Recording 980 instead of 890 understated cash by 90 → add back."),
    mc("The two adjusted balances don't agree by $150. Which is NOT a plausible cause?", ["A deposit in transit was omitted", "A voided check was listed as outstanding", "A bank service charge was already recorded in the books", "Depreciation was not recorded"], 3, "Depreciation has nothing to do with cash."),
    je("Record the bank's collection of the $1,000 note receivable plus $20 interest.", ["Cash", "Notes Receivable", "Interest Revenue", "Accounts Receivable"], ["Cash"], ["Notes Receivable", "Interest Revenue"], "Dr Cash 1,020; Cr Notes Receivable 1,000; Cr Interest Revenue 20."),
    je("Record the $560 NSF check received from a customer.", ["Accounts Receivable", "Cash", "Bad Debts Expense", "Sales Returns"], ["Accounts Receivable"], ["Cash"], "Reinstate the receivable; the customer still owes you (plus any fee you pass along)."),
    je("Correct the book error: check #1044 for $890 (rent) recorded as $980.", ["Cash", "Rent Expense", "Accounts Payable", "Bank Fees Expense"], ["Cash"], ["Rent Expense"], "Increase Cash $90 and reduce the over-recorded Rent Expense."),
    tf("The bank's error should be corrected with a journal entry in the company's books.", false, "Bank errors are corrected by the bank; the company just notes them on the bank side."),
    mc("Cash on the balance sheet should equal…", ["The bank statement balance", "The unadjusted book balance", "The adjusted (reconciled) balance", "Deposits in transit"], 2, "After the book-side entries, the general ledger = true cash."),
  ]],
]);

unit(T, "t16", "16. Accounts Receivable and Bad Debts Expense", "Allowance methods, aging, write-offs, recoveries, factoring", [
  ["Allowance Method & Aging", "Allowance method matches bad debt expense to the sale period. Aging schedule → required allowance balance → expense = required − existing credit (+ existing debit).", [
    fill("Aging: Current $100,000 @1%; 31–60 days $40,000 @5%; 61–90 $15,000 @20%; >90 $8,000 @50%. Required allowance?", 10000, "1,000 + 2,000 + 3,000 + 4,000 = $10,000."),
    fill("Required allowance $10,000; existing balance $2,300 credit. Bad Debts Expense?", 7700, "10,000 − 2,300 = $7,700."),
    fill("Required allowance $10,000; existing balance $1,200 DEBIT (write-offs exceeded prior allowance). Bad Debts Expense?", 11200, "10,000 + 1,200 = $11,200."),
    je("Write off customer Jones' $3,400 account as uncollectible (allowance method).", ["Allowance for Doubtful Accounts", "Accounts Receivable", "Bad Debts Expense", "Cash"], ["Allowance for Doubtful Accounts"], ["Accounts Receivable"], "No expense — it was estimated earlier. Net A/R is unchanged by a write-off."),
    mc("A write-off under the allowance method affects net realizable value of A/R by…", ["Decreasing it", "Increasing it", "Zero — both gross A/R and the allowance fall equally", "Depends on the amount"], 2, "NRV unchanged; that's the point of the allowance."),
    je("Jones unexpectedly pays the $3,400 previously written off. Record the REINSTATEMENT (first entry).", ["Accounts Receivable", "Allowance for Doubtful Accounts", "Cash", "Bad Debts Expense"], ["Accounts Receivable"], ["Allowance for Doubtful Accounts"], "Then Dr Cash / Cr A/R for the collection."),
    mc("Percentage-of-sales method: credit sales $2,000,000 × 0.5% = $10,000. Existing allowance $2,300 credit. Bad Debts Expense?", ["$7,700", "$10,000", "$12,300", "$2,300"], 1, "Income-statement approach ignores the existing balance; expense = $10,000."),
    tf("The direct write-off method is acceptable under GAAP when bad debts are immaterial.", true, "Otherwise it violates matching; it IS the required method for tax purposes."),
    mc("Under ASC 326 (CECL), the allowance should reflect…", ["Only receivables already past due", "Expected credit losses over the life of the receivables, using historical, current, and forecast information", "Losses incurred in the period", "Zero until a default occurs"], 1, "Current Expected Credit Losses — forward-looking."),
  ]],
  ["Managing Receivables", "Credit policies, terms, notes receivable, factoring, and metrics like DSO and A/R turnover.", [
    fill("Credit sales $2,190,000; average A/R $240,000. A/R turnover? (2 decimals)", 9.13, "2,190 ÷ 240 = 9.125.", { unit: "x", tol: 0.02 }),
    fill("A/R turnover 9.125. DSO?", 40, "365 ÷ 9.125 = 40 days.", { unit: "days", tol: 0.6 }),
    mc("A company factors $100,000 of receivables WITHOUT recourse for a 4% fee. The entry includes…", ["Dr Cash 96,000; Dr Loss on Sale 4,000; Cr A/R 100,000", "Dr Cash 100,000; Cr A/R 100,000", "Dr Notes Payable", "Dr Cash 96,000; Cr Sales 96,000"], 0, "Without recourse = sale of receivables; fee is a loss/expense."),
    fill("$20,000, 90-day, 9% note receivable. Interest at maturity? (360-day year)", 450, "20,000 × 9% × 90/360 = $450."),
    je("The note above is dishonored at maturity (customer doesn't pay) but collection is still expected.", ["Accounts Receivable", "Notes Receivable", "Interest Revenue", "Cash"], ["Accounts Receivable"], ["Notes Receivable", "Interest Revenue"], "Transfer to A/R at face + interest (20,450); pursue collection."),
    mc("Offering 2/10, n/30 mainly aims to…", ["Increase sales price", "Accelerate collections", "Reduce bad debts to zero", "Comply with GAAP"], 1, "Cash discounts speed up cash inflow at a cost."),
    mc("An A/R aging report is MOST useful for…", ["Computing sales tax", "Estimating the allowance and prioritizing collection efforts", "Bank reconciliation", "Inventory valuation"], 1, "Older = higher risk."),
    tf("Credit card sales (Visa/Mastercard) are treated as cash sales less the processing fee, not as receivables from the customer.", true, "Dr Cash, Dr Credit Card Fee Expense, Cr Sales."),
  ]],
]);

unit(T, "t17", "17. Accounts Payable", "Three-way match, accruals, discounts, debit balances, and controls", [
  ["A/P Process & Controls", "Three-way match: purchase order + receiving report + vendor invoice. Record at invoice date; accrue received-not-invoiced at period end.", [
    order("Order the purchase-to-pay cycle", ["Purchase requisition", "Purchase order issued", "Goods received & receiving report", "Vendor invoice received & three-way match", "Invoice approved and recorded in A/P", "Payment issued"], "Segregate ordering, receiving, recording, and paying."),
    mc("Goods received Dec 30 (FOB shipping point, shipped Dec 27); invoice arrives Jan 4. At Dec 31 you should…", ["Record nothing until January", "Accrue inventory and A/P (received-not-invoiced)", "Record only in inventory", "Expense in January"], 1, "Ownership passed and goods are in inventory → the liability exists at Dec 31."),
    mc("Terms 1/15, n/45. Approximate annualized cost of forgoing the discount?", ["1%", "12.3%", "24.5%", "36.7%"], 1, "1/99 × 365/30 ≈ 12.3%."),
    mc("A vendor account shows a DEBIT balance of $600. Most likely cause?", ["Unpaid invoice", "Overpayment or a credit memo for returned goods", "Normal", "Bank error"], 1, "Debit balances in A/P should be reclassified as receivables if material."),
    je("Return $1,500 of defective inventory to the vendor before paying (perpetual).", ["Accounts Payable", "Inventory", "Purchase Returns", "Cash"], ["Accounts Payable"], ["Inventory"], "Reduce the liability and the inventory."),
    mc("Which control best prevents duplicate vendor payments?", ["Paying from statements instead of invoices", "System match on vendor + invoice number, and paying only from original invoices", "Paying on the due date", "Using petty cash"], 1, "Duplicate detection plus 'paid' stamping/cancellation."),
    mc("An A/P clerk who can add vendors AND approve payments creates the risk of…", ["Late payments", "Fictitious-vendor fraud", "Lost discounts", "Higher COGS"], 1, "Segregate vendor master maintenance from payment approval."),
    fill("A/P turnover: COGS $1,095,000; average A/P $120,000. DPO?", 40, "1,095 ÷ 120 = 9.125 turns → 40 days.", { unit: "days", tol: 0.6 }),
    tf("Accrued liabilities (e.g., utilities not yet billed) are recorded in Accounts Payable.", false, "Best practice: A/P holds vendor invoices received; unbilled amounts go to Accrued Liabilities."),
  ]],
]);

unit(T, "t18", "18. Inventory and Cost of Goods Sold", "Cost flow assumptions, perpetual vs periodic, LCM/NRV, estimation methods", [
  ["Cost Flow Assumptions", "FIFO, LIFO, weighted average, specific ID. In rising prices: FIFO → higher ending inventory, lower COGS, higher income and taxes; LIFO → the reverse.", [
    fill("Purchases: 100 @ $10, 100 @ $12, 100 @ $14. Sold 250 units. FIFO COGS?", 2900, "100×10 + 100×12 + 50×14 = 1,000 + 1,200 + 700 = $2,900."),
    fill("Same data. LIFO (periodic) COGS?", 3100, "100×14 + 100×12 + 50×10 = 1,400 + 1,200 + 500 = $3,100."),
    fill("Same data. Weighted-average COGS?", 3000, "Average = 3,600 ÷ 300 = $12; 250 × 12 = $3,000."),
    fill("Same data. FIFO ending inventory?", 700, "50 units × $14 = $700."),
    mc("In a period of rising prices, which method yields the LOWEST income taxes?", ["FIFO", "LIFO", "Weighted average", "Specific identification"], 1, "Higher COGS → lower taxable income. LIFO conformity rule: if used for tax, must be used for books."),
    mc("A LIFO liquidation occurs when…", ["Prices fall", "Inventory quantities decline and old, low-cost layers flow into COGS, inflating profit", "The company switches to FIFO", "Inventory is written down"], 1, "Must be disclosed; distorts margins."),
    mc("LIFO is…", ["Permitted under both GAAP and IFRS", "Permitted under U.S. GAAP but prohibited under IFRS", "Prohibited under both", "Required for retailers"], 1, "A key GAAP/IFRS difference."),
    tf("Under the perpetual system, LIFO and periodic LIFO always give the same COGS.", false, "Perpetual LIFO applies the rule at each sale, so results can differ from periodic LIFO."),
  ]],
  ["Valuation, Errors & Estimates", "Inventory error effects reverse in the next period. LCM applies to LIFO/retail; LCNRV applies to FIFO/average. Gross profit and retail methods estimate inventory.", [
    mc("Ending inventory is OVERSTATED by $10,000 this year. Effect on this year's net income?", ["Understated $10,000", "Overstated $10,000", "No effect", "Overstated $20,000"], 1, "COGS understated → income overstated. Next year reverses (beginning inventory overstated → COGS overstated)."),
    mc("The same error's effect on NEXT year's net income?", ["Overstated $10,000", "Understated $10,000", "No effect", "Overstated $20,000"], 1, "Counterbalancing error — two-year total is correct, but each year is wrong."),
    fill("Item: cost $50; selling price $60; cost to complete/sell $15. NRV and carrying amount under LCNRV (FIFO)?", 45, "NRV = 60 − 15 = 45 < cost 50 → write down to $45."),
    fill("Gross profit method: beginning inventory $80,000; purchases $300,000; sales $400,000; historical gross margin 35%. Estimated ending inventory?", 120000, "Goods available 380,000 − estimated COGS (400,000 × 65% = 260,000) = $120,000."),
    fill("Retail method: goods available at cost $210,000 and at retail $300,000; sales $240,000. Estimated ending inventory at cost?", 42000, "Cost ratio 70%; ending retail 60,000 × 70% = $42,000."),
    mc("Which cost is NOT included in inventory cost?", ["Freight-in", "Import duties", "Freight-out to customers", "Insurance while in transit (buyer's risk)"], 2, "Freight-out is a selling expense."),
    mc("Goods held on consignment by a retailer are…", ["Included in the retailer's inventory", "Included in the consignor's (owner's) inventory", "Expensed", "Recorded as a liability"], 1, "Title stays with the consignor."),
    je("Year-end LCNRV write-down of $8,000 (perpetual, direct method).", ["Cost of Goods Sold", "Inventory", "Loss on Inventory", "Sales"], ["Cost of Goods Sold"], ["Inventory"], "Many companies debit COGS (or a separate loss account) and credit Inventory or an allowance."),
    tf("Under U.S. GAAP, an inventory write-down may be reversed if NRV later recovers.", false, "GAAP prohibits reversal (IFRS allows up to original cost)."),
  ]],
]);

unit(T, "t19", "19. Depreciation", "Methods, partial years, changes in estimate, disposals, impairment", [
  ["Methods & Partial Years", "Straight-line: (Cost − Salvage)/Life. Double-declining: 2/Life × book value (ignore salvage until floor). Units-of-production: (Cost − Salvage)/Total units × units used. SYD: remaining life/SYD × depreciable base.", [
    fill("Machine cost $100,000; salvage $10,000; 5-year life. Year 1 straight-line depreciation?", 18000, "(100,000 − 10,000) ÷ 5 = $18,000."),
    fill("Same machine, double-declining balance. Year 1 depreciation?", 40000, "2/5 = 40% × 100,000 = $40,000 (salvage ignored initially)."),
    fill("Same machine, DDB. Year 2 depreciation?", 24000, "40% × (100,000 − 40,000) = $24,000."),
    fill("Same machine, DDB. Year 5 depreciation (book value must not go below $10,000 salvage)?", 2960, "Book value after Y4: 100,000 − 40,000 − 24,000 − 14,400 − 8,640 = 12,960. Y5 = 12,960 − 10,000 = $2,960 (not 40%)."),
    fill("Same machine, sum-of-the-years'-digits. Year 1?", 30000, "SYD = 15; 5/15 × 90,000 = $30,000."),
    fill("Units-of-production: machine will produce 450,000 units; 60,000 units this year. Depreciation?", 12000, "90,000 ÷ 450,000 = $0.20/unit × 60,000 = $12,000."),
    fill("Equipment bought Sept 1 for $36,000, salvage $0, 6-year life, straight-line, calendar year. Year-1 depreciation?", 2000, "6,000/yr × 4/12 = $2,000."),
    mc("Which method produces the highest net income in an asset's first year?", ["Double-declining balance", "Straight-line", "Sum-of-the-years'-digits", "They're equal"], 1, "Accelerated methods front-load expense."),
    tf("Land is depreciated over 40 years.", false, "Land has an indefinite life — never depreciated. Land improvements (parking lots, fences) are."),
  ]],
  ["Changes, Disposals & Impairment", "Change in estimate: prospective — depreciate remaining book value over remaining life. Disposal: remove cost & accumulated depreciation; difference vs proceeds = gain/loss. Impairment: two-step under ASC 360.", [
    fill("Asset cost $100,000; salvage $10,000; 5-yr SL. After 2 years, life is revised to 6 years total and salvage to $4,000. Year-3 depreciation?", 15000, "Book value 64,000 − new salvage 4,000 = 60,000 ÷ 4 remaining years = $15,000."),
    fill("Equipment cost $80,000; accumulated depreciation $62,000; sold for $23,000. Gain or loss (enter gain as positive)?", 5000, "Book value 18,000; proceeds 23,000 → gain $5,000."),
    je("Record the sale above (proceeds $23,000).", ["Cash", "Accumulated Depreciation", "Equipment", "Gain on Sale of Equipment", "Loss on Sale of Equipment"], ["Cash", "Accumulated Depreciation"], ["Equipment", "Gain on Sale of Equipment"], "Dr Cash 23,000; Dr Acc Dep 62,000; Cr Equipment 80,000; Cr Gain 5,000."),
    je("Fully depreciated equipment (cost $15,000, no salvage) is scrapped for nothing.", ["Accumulated Depreciation", "Equipment", "Loss on Disposal", "Cash"], ["Accumulated Depreciation"], ["Equipment"], "No gain/loss when book value is zero and no proceeds."),
    mc("ASC 360 impairment test step 1: an asset is impaired if…", ["Fair value < book value", "Sum of UNDISCOUNTED future cash flows < carrying amount", "Depreciation is too low", "The asset is idle"], 1, "Step 2 measures the loss as carrying amount − fair value."),
    fill("Carrying amount $500,000; undiscounted future cash flows $450,000; fair value $380,000. Impairment loss?", 120000, "Step 1 fails (450 < 500). Loss = 500,000 − 380,000 = $120,000."),
    mc("Which expenditure is CAPITALIZED rather than expensed?", ["Routine oil change on a truck", "Replacing an engine that extends the truck's life 3 years", "Repainting an office", "Annual software subscription"], 1, "Betterments/extensions of useful life are capitalized; routine maintenance is expensed."),
    mc("Depreciation for book (GAAP) and tax (MACRS) often differ, creating…", ["Errors", "Deferred tax liabilities/assets (temporary differences)", "Permanent differences", "OCI"], 1, "Accelerated MACRS → lower tax now, DTL on the balance sheet."),
    tf("Depreciation expense represents a decline in the asset's market value.", false, "It's a systematic allocation of cost over useful life, not a valuation."),
  ]],
]);

})(window.LL);
