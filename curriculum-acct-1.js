/* Accounting track — Topics 01–08 */
(function ({ mc, tf, dc, fill, je, match, order, unit }) {
const T = "accounting";

unit(T, "t01", "01. Accounting Basics", "Statements, the double-entry system, and six sample transactions", [
  ["What Accounting Reports", "Income statement = a period of time (profitability). Balance sheet = a point in time (financial position). Cash flow statement explains the change in cash.", [
    mc("Which statement reports a company's profitability for a period of time?", ["Balance sheet", "Income statement", "Statement of cash flows", "Trial balance"], 1, "The income statement (P&L) covers a period such as a month, quarter or year."),
    mc("The balance sheet reports amounts…", ["For the whole year", "As of a specific moment in time", "For the last 12 months", "Since the company was formed"], 1, "It's a snapshot 'as of' a date — e.g., midnight December 31."),
    tf("Under the accrual basis, revenue is reported when it is earned, not when cash is received.", true, "Revenue recognition principle. Cash timing is irrelevant to when revenue appears on the income statement."),
    mc("A consulting firm performs $5,000 of work in March and is paid in April. Under accrual accounting, revenue is reported in…", ["March", "April", "Half each month", "When the client is invoiced"], 0, "Revenue is earned when services are performed — March."),
    match("Match each item to the statement it appears on", [["Accounts Receivable", "Balance Sheet"], ["Advertising Expense", "Income Statement"], ["Notes Payable", "Balance Sheet"], ["Service Revenues", "Income Statement"], ["Common Stock", "Balance Sheet"]], "Assets, liabilities, equity → balance sheet. Revenues, expenses → income statement."),
    mc("The matching principle requires that…", ["Debits match credits", "Expenses be reported in the same period as the revenues they helped earn", "Bank statements match the books", "Cash paid equals expenses"], 1, "Also called the expense recognition principle. It's why we make adjusting entries."),
    fill("Revenues $120,000; expenses $95,000; owner draws $10,000. Net income?", 25000, "Net income = revenues − expenses = $25,000. Draws are not expenses; they reduce equity directly."),
    mc("Which is NOT one of the three sections of the statement of cash flows?", ["Operating activities", "Investing activities", "Financing activities", "Adjusting activities"], 3, "Operating, investing, financing. The statement also reconciles beginning to ending cash."),
  ]],
  ["The Double-Entry System", "Every transaction affects at least two accounts and total debits = total credits. This keeps Assets = Liabilities + Equity always in balance.", [
    mc("Owner invests $20,000 cash into a new corporation for common stock. Effect on the equation?", ["Assets ↑ 20,000; Equity ↑ 20,000", "Assets ↑ 20,000; Liabilities ↑ 20,000", "Assets ↓; Equity ↓", "Equity ↑ only"], 0, "Cash (asset) and Common Stock (equity) both increase."),
    je("The company borrows $30,000 from the bank, signing a note.", ["Cash", "Notes Payable", "Interest Expense", "Common Stock"], ["Cash"], ["Notes Payable"], "Dr Cash 30,000 / Cr Notes Payable 30,000. Assets and liabilities both rise."),
    je("Purchases a $14,000 delivery van, paying cash.", ["Vehicles", "Cash", "Vehicle Expense", "Accounts Payable"], ["Vehicles"], ["Cash"], "One asset (Vehicles) up, another (Cash) down. Total assets unchanged."),
    je("Performs $2,500 of services on credit (invoice sent; payment due in 30 days).", ["Accounts Receivable", "Cash", "Service Revenues", "Unearned Revenues"], ["Accounts Receivable"], ["Service Revenues"], "Revenue is earned now; the asset is a receivable."),
    je("Pays $800 for the current month's advertising.", ["Advertising Expense", "Cash", "Prepaid Advertising", "Accounts Payable"], ["Advertising Expense"], ["Cash"], "Expense incurred and paid in the same period."),
    je("Receives $1,200 from a customer for services to be performed next month.", ["Cash", "Service Revenues", "Unearned Revenues", "Accounts Receivable"], ["Cash"], ["Unearned Revenues"], "Cash before performance = liability (deferred revenue), not revenue."),
    fill("After the six transactions above (investment 20,000; loan 30,000; van 14,000 cash; services on credit 2,500; ad 800 cash; advance 1,200), what is the Cash balance?", 36400, "20,000 + 30,000 − 14,000 − 800 + 1,200 = $36,400. The credit sale did not affect cash."),
    fill("Using the same six transactions, what is total stockholders' equity?", 21700, "Common Stock 20,000 + net income (2,500 revenue − 800 expense = 1,700) = $21,700."),
    tf("A transaction can increase one asset and decrease another asset with no change in liabilities or equity.", true, "e.g., buying equipment with cash or collecting a receivable."),
  ]],
]);

unit(T, "t02", "02. Debits and Credits", "Rules of debit and credit, T-accounts, normal balances, and contra accounts", [
  ["Rules of Debit and Credit", "Debit = left, Credit = right. Assets, Expenses, Dividends/Draws increase with debits (mnemonic: DEAD). Liabilities, Equity, Revenues increase with credits (CLER).", [
    dc("To increase Equipment, you…", "debit", "Assets increase with debits."),
    dc("To increase Accounts Payable, you…", "credit", "Liabilities increase with credits."),
    dc("To record Salaries Expense, you…", "debit", "Expenses increase with debits."),
    dc("To decrease Cash, you…", "credit", "Assets decrease with credits."),
    dc("To increase Retained Earnings (e.g., closing net income), you…", "credit", "Equity increases with credits."),
    dc("To record Dividends declared, you…", "debit", "Dividends reduce equity → debit."),
    dc("To reduce Notes Payable when a loan is repaid, you…", "debit", "Liabilities decrease with debits."),
    dc("To record Interest Revenue earned, you…", "credit", "Revenues increase with credits."),
    mc("Which group of accounts ALL have normal debit balances?", ["Cash, Rent Expense, Dividends", "Cash, Sales, Accounts Payable", "Accounts Payable, Common Stock, Sales", "Rent Expense, Unearned Revenue, Land"], 0, "DEAD: Dividends, Expenses, Assets, Draws are debit-balance accounts."),
    tf("A credit always means an increase.", false, "A credit increases liabilities/equity/revenue but DECREASES assets and expenses."),
  ]],
  ["T-Accounts & Contra Accounts", "A contra account carries the opposite normal balance of its partner: Accumulated Depreciation (contra-asset, credit), Sales Returns (contra-revenue, debit), Treasury Stock (contra-equity, debit).", [
    fill("Cash T-account: debits 12,000 and 3,500; credits 6,200 and 1,800. Ending balance?", 7500, "15,500 − 8,000 = $7,500 debit balance."),
    mc("Accumulated Depreciation is…", ["An expense", "A liability", "A contra-asset with a normal credit balance", "A revenue"], 2, "It reduces the carrying amount of the related fixed asset."),
    mc("Sales Returns and Allowances normally has a…", ["Debit balance (contra-revenue)", "Credit balance (revenue)", "Credit balance (liability)", "No balance"], 0, "It reduces gross sales to net sales; debit balance."),
    mc("Allowance for Doubtful Accounts normally has a…", ["Debit balance", "Credit balance", "Zero balance", "Depends on the month"], 1, "It's a contra-asset offsetting Accounts Receivable."),
    dc("A customer returns merchandise; the company records Sales Returns and Allowances with a…", "debit", "Contra-revenue accounts increase with debits."),
    mc("Which of the following would appear as a credit balance in the trial balance?", ["Prepaid Rent", "Accumulated Depreciation", "Supplies", "Treasury Stock"], 1, "Accumulated Depreciation (contra-asset) and Treasury Stock (contra-equity, DEBIT) — only Accumulated Depreciation is a credit."),
    fill("Equipment $80,000; Accumulated Depreciation $32,000. What is the equipment's book value?", 48000, "Cost − accumulated depreciation = $48,000."),
    je("Correct an error: a $500 payment for Repairs was mistakenly debited to Equipment.", ["Repairs Expense", "Equipment", "Cash", "Accumulated Depreciation"], ["Repairs Expense"], ["Equipment"], "Move the amount out of the asset into the expense; cash was already correct."),
    tf("Discount on Bonds Payable is a contra-liability with a debit balance.", true, "It reduces the carrying value of the bonds below face."),
  ]],
]);

unit(T, "t03", "03. Chart of Accounts", "Structure, numbering, and designing an account list", [
  ["Structure & Numbering", "Typical order mirrors the statements: 1000s assets, 2000s liabilities, 3000s equity, 4000s revenues, 5000s COGS, 6000s+ operating expenses, 7000/8000s other income/expense.", [
    mc("The chart of accounts is best described as…", ["A list of customers", "An index of every general ledger account and its number", "The balance sheet", "A payroll register"], 1, "It's the framework for classifying transactions."),
    match("Match the typical account number range to its category", [["1000–1999", "Assets"], ["2000–2999", "Liabilities"], ["3000–3999", "Equity"], ["4000–4999", "Revenues"], ["5000–5999", "Cost of Goods Sold"], ["6000–6999", "Operating Expenses"]], "Statement order: balance sheet accounts first, then income statement accounts."),
    mc("Within assets, accounts are usually listed in order of…", ["Alphabetical order", "Dollar size", "Liquidity (cash first)", "Date created"], 2, "Cash, receivables, inventory, prepaids, then long-term assets."),
    mc("Which account number is MOST appropriate for 'Accrued Wages Payable'?", ["1350", "2250", "3100", "6200"], 1, "It's a current liability → 2000-series."),
    mc("A company with three departments wants expense reporting by department. Best approach?", ["Create one Expense account", "Use sub-accounts or department segments (e.g., 6100-01, 6100-02)", "Track it in a spreadsheet only", "Use different bank accounts"], 1, "Segmented/sub-account numbering allows roll-ups without cluttering the chart."),
    tf("Leaving gaps in numbering (e.g., 1010, 1020) is recommended so new accounts can be inserted in logical order.", true, "Gaps preserve statement ordering as the business grows."),
    mc("Which is an example of an 'Other Income' account (non-operating)?", ["Sales", "Gain on Sale of Equipment", "Cost of Goods Sold", "Wages Expense"], 1, "Non-operating gains/losses are separated from core operations on the income statement."),
    order("Arrange these accounts in the usual chart-of-accounts order", ["Cash", "Inventory", "Equipment", "Accounts Payable", "Common Stock", "Sales", "Cost of Goods Sold", "Rent Expense"], "Assets (liquidity order) → liabilities → equity → revenues → COGS → operating expenses."),
  ]],
  ["Designing a Chart", "A good chart supports the reports management needs — but too many accounts create noise. Consistency and clear definitions matter more than granularity.", [
    mc("A bookkeeper creates a new 'Miscellaneous Expense' account and posts 40% of all expenses to it. What is the problem?", ["Nothing — it saves time", "Loss of useful information; expenses should be classified by nature", "It violates the accounting equation", "It creates a credit balance"], 1, "Misc should be small and rare. Large misc balances hide trends and invite audit questions."),
    mc("A retailer sells online and in-store and wants gross margin by channel. The chart should…", ["Have separate Sales and COGS accounts (or segments) for each channel", "Combine all sales into one account", "Track channels only in the bank", "Use one COGS but split Sales"], 0, "Margin by channel requires both revenue AND cost to be split consistently."),
    tf("Balance-sheet accounts should be set up to mirror the line items management reports (e.g., separate accounts per bank account, per loan).", true, "One GL account per bank account/loan simplifies reconciliations."),
    mc("Which account should NOT normally be in the chart of a sole proprietorship?", ["Owner's Capital", "Owner's Drawing", "Retained Earnings", "Cash"], 2, "Retained Earnings is a corporate account; proprietorships use Owner's Capital and Drawing."),
    mc("A company's software allows account 'types'. Why does the type matter more than the number?", ["Numbers are decorative", "The type drives where the account appears on statements and how it closes at year end", "Types are required by the IRS", "Types determine tax rates"], 1, "Type determines statement placement, normal balance, and closing behavior."),
    mc("When should an account be deactivated rather than deleted?", ["Never — always delete", "When it has historical activity, so prior-period reports remain intact", "Only at year end", "When the balance is negative"], 1, "Deleting an account with history corrupts prior reports; deactivate instead."),
    match("Match the item to the most appropriate account", [["Customer prepays for annual subscription", "Unearned Revenue"], ["Employer 401(k) match", "Employee Benefits Expense"], ["Customer deposit on custom order", "Customer Deposits (liability)"], ["Interest on overdue receivable", "Interest Income"], ["Legal fees to form corporation", "Organization Costs / Startup Expense"]], "Choosing the right account is the bookkeeper's core judgment."),
  ]],
]);

unit(T, "t04", "04. Bookkeeping", "Recording transactions, special journals, the accounting cycle, reversing entries", [
  ["Recording Transactions", "Source document → journal (chronological) → ledger (by account) → trial balance. Special journals (sales, purchases, cash receipts, cash disbursements) speed up repetitive entries.", [
    order("Put the accounting cycle steps in order", ["Analyze source documents", "Journalize transactions", "Post to the general ledger", "Prepare an unadjusted trial balance", "Record adjusting entries", "Prepare financial statements", "Record closing entries", "Prepare post-closing trial balance"], "Journalize → post → trial balance → adjust → statements → close → post-closing TB."),
    mc("Posting refers to…", ["Mailing invoices", "Transferring journal entry amounts to the ledger accounts", "Recording adjusting entries", "Preparing the trial balance"], 1, "Journal → ledger."),
    mc("A credit sale of merchandise is recorded in which special journal?", ["Cash receipts journal", "Sales journal", "Purchases journal", "General journal"], 1, "Only sales on account go in the sales journal; cash sales go in the cash receipts journal."),
    mc("Which transaction belongs in the general journal?", ["Cash sale", "Purchase of inventory on account", "Depreciation adjusting entry", "Customer payment received"], 2, "Adjusting, closing, correcting, and unusual entries use the general journal."),
    je("Purchases $4,000 of merchandise inventory on account, terms 2/10, n/30 (gross method, perpetual).", ["Inventory", "Accounts Payable", "Purchases Discounts", "Cash"], ["Inventory"], ["Accounts Payable"], "Gross method records the full invoice; discount is recorded only if taken."),
    je("Pays the $4,000 invoice within the discount period (perpetual, gross method).", ["Accounts Payable", "Cash", "Inventory", "Interest Expense"], ["Accounts Payable"], ["Cash", "Inventory"], "Dr A/P 4,000; Cr Cash 3,920; Cr Inventory 80 (discount reduces inventory cost under perpetual)."),
    fill("A trial balance's debit column totals $210,450 and the credit column $210,360. What is the difference, and is it divisible by 9?", 90, "Difference $90 — divisible by 9 suggests a transposition (e.g., 540 recorded as 450) or a slide."),
    mc("A $1,000 debit to Rent Expense was posted as a debit to Repairs Expense. The trial balance will…", ["Be out of balance by $1,000", "Be out of balance by $2,000", "Still balance", "Show a credit balance in Rent"], 2, "Debits still equal credits; the error is a misclassification the trial balance can't catch."),
    tf("The bookkeeper should record the payment of a vendor invoice on the date it is paid, not the invoice date.", true, "Invoice date drives the expense/A-P recognition; payment date drives the cash disbursement entry."),
  ]],
  ["Reversing Entries & Controls", "Reversing entries (optional, dated the first day of the new period) undo accrual-type adjusting entries so routine cash entries can be recorded normally.", [
    mc("Which adjusting entry is a candidate for a reversing entry?", ["Depreciation", "Accrued wages payable", "Recording expired prepaid insurance", "Bad debt allowance"], 1, "Accruals (accrued expenses and accrued revenues) are reversed; deferrals normally are not."),
    je("Dec 31 accrual was Dr Wages Expense 3,000 / Cr Wages Payable 3,000. Record the Jan 1 reversing entry.", ["Wages Payable", "Wages Expense", "Cash", "Accrued Liabilities"], ["Wages Payable"], ["Wages Expense"], "Reversal flips the accrual. Wages Expense temporarily has a $3,000 credit balance."),
    fill("After the reversal above, the Jan 5 payroll of $7,000 is recorded entirely as Wages Expense. What is January's net Wages Expense from that payroll?", 4000, "7,000 − 3,000 (credit from reversal) = $4,000 — exactly the portion belonging to January."),
    mc("The main benefit of reversing entries is…", ["Higher net income", "Simplicity — the later payment can be recorded without splitting between periods", "Avoiding taxes", "Eliminating the need for adjusting entries"], 1, "They prevent double-counting when the cash entry is recorded routinely."),
    mc("Which internal control is MOST important for a small business with one bookkeeper?", ["Owner reviews bank statements and reconciliations personally", "Bookkeeper approves own expense reports", "Skip reconciliations to save time", "Bookkeeper is the only check signer"], 0, "Owner oversight compensates for limited segregation of duties."),
    tf("Recording a December utility bill received January 5 (for December service) in January is acceptable under accrual accounting.", false, "It must be accrued in December — the expense was incurred then."),
    mc("Cut-off procedures at period end ensure that…", ["Cash is counted", "Transactions are recorded in the correct period", "Employees are paid", "The bank is notified"], 1, "Proper cut-off is critical for accurate revenues, expenses, and inventory."),
    match("Match the control to the risk it addresses", [["Pre-numbered checks & invoices", "Unrecorded/missing documents"], ["Monthly bank reconciliation by someone independent", "Cash theft or errors"], ["Vendor master-file approval", "Fictitious vendors"], ["Physical inventory counts", "Shrinkage / inventory misstatement"], ["Mandatory vacations", "Concealed ongoing fraud"]], "Controls are designed to address specific risks."),
  ]],
]);

unit(T, "t05", "05. Accounting Equation", "Expanded equation and transaction analysis for proprietorships and corporations", [
  ["Expanded Equation", "Assets = Liabilities + Owner's Capital − Draws + Revenues − Expenses (proprietorship); or Paid-in Capital + Retained Earnings for a corporation.", [
    mc("Which is the expanded accounting equation for a corporation?", ["Assets = Liabilities + Paid-in Capital + Retained Earnings", "Assets = Liabilities − Equity", "Assets + Expenses = Revenues", "Assets = Revenues − Expenses"], 0, "Retained Earnings = cumulative net income − cumulative dividends."),
    fill("Assets $250,000; Liabilities $90,000. Equity?", 160000, "250,000 − 90,000 = $160,000."),
    fill("Beginning equity $100,000; net income $35,000; owner draws $12,000; owner investment $5,000. Ending equity?", 128000, "100,000 + 35,000 − 12,000 + 5,000 = $128,000."),
    fill("A company's assets increased by $40,000 and liabilities decreased by $10,000 during the year. Change in equity?", 50000, "ΔA = ΔL + ΔE → 40,000 = −10,000 + ΔE → ΔE = $50,000."),
    fill("Equity rose $50,000; owner invested $20,000 and withdrew $8,000. Net income?", 38000, "ΔE = investments − draws + NI → 50,000 = 20,000 − 8,000 + NI → NI = $38,000."),
    mc("Paying a $2,000 account payable has what effect?", ["Assets ↓, Liabilities ↓", "Assets ↓, Equity ↓", "Assets ↑, Liabilities ↑", "No effect"], 0, "Cash and A/P both decrease; equity unchanged."),
    mc("Recording $500 of depreciation has what effect?", ["Assets ↓, Equity ↓", "Assets ↓, Liabilities ↑", "No effect on the equation", "Equity ↑"], 0, "Accumulated Depreciation (contra-asset) increases → net assets fall; Depreciation Expense reduces equity."),
    tf("Declaring (but not yet paying) a cash dividend decreases assets.", false, "Declaration creates a liability (Dividends Payable) and reduces Retained Earnings. Assets fall only when paid."),
    mc("Which transaction increases both total assets and total equity?", ["Collecting a receivable", "Providing services on account", "Paying rent", "Borrowing from a bank"], 1, "A/R ↑ and Revenue ↑ (equity)."),
  ]],
]);

unit(T, "t06", "06. Accounting Principles", "GAAP concepts, assumptions, constraints, and how they drive judgment", [
  ["Core Principles & Assumptions", "Economic entity, going concern, monetary unit, time period; cost, revenue recognition, matching, full disclosure; materiality, conservatism, consistency, industry practices.", [
    match("Match the principle to its description", [["Economic entity", "Keep owner's personal transactions separate"], ["Going concern", "Business will continue indefinitely"], ["Monetary unit", "Record only in a stable currency; ignore inflation"], ["Time period", "Report in artificial intervals like months/years"], ["Cost principle", "Record assets at original transaction amount"]], "These assumptions underlie every set of GAAP statements."),
    mc("A company's land purchased in 1995 for $50,000 is now worth $900,000. On the balance sheet it appears at…", ["$900,000", "$50,000", "$475,000", "Market value less selling costs"], 1, "Cost principle. GAAP does not revalue land upward (IFRS allows a revaluation model)."),
    mc("Reporting a $30 stapler as an expense rather than depreciating it over 10 years is justified by…", ["Conservatism", "Materiality", "Consistency", "Going concern"], 1, "Immaterial amounts may be handled in the most practical way."),
    mc("Recording an estimated warranty liability when products are sold reflects…", ["Cost principle", "Matching principle", "Monetary unit assumption", "Economic entity"], 1, "Warranty cost is matched to the period of the related sale."),
    mc("Writing inventory down to net realizable value but never up above cost is an example of…", ["Materiality", "Conservatism (prudence)", "Full disclosure", "Consistency"], 1, "When in doubt, don't overstate assets or income."),
    mc("The full disclosure principle is satisfied mainly through…", ["The trial balance", "Notes to the financial statements", "The chart of accounts", "Bank statements"], 1, "Significant accounting policies, contingencies, subsequent events, etc., go in the notes."),
    tf("A company may switch from FIFO to weighted average whenever it wants, as long as it uses one method within a year.", false, "Consistency principle: changes require justification (preferability) and disclosure, with retrospective application under ASC 250."),
    mc("If a company is NOT a going concern, assets should be reported at…", ["Historical cost", "Liquidation (net realizable) values", "Replacement cost", "Zero"], 1, "The going-concern assumption justifies cost-based measurement; without it, liquidation basis applies."),
    mc("Which body currently sets U.S. GAAP for non-governmental entities?", ["IRS", "SEC only", "FASB", "AICPA"], 2, "FASB issues the Accounting Standards Codification (ASC). The SEC has authority over public companies and defers to FASB."),
    mc("A lawsuit against the company is 'reasonably possible' (not probable) with an estimable loss. Proper treatment under ASC 450?", ["Accrue the loss", "Disclose in the notes; do not accrue", "Ignore it", "Accrue half"], 1, "Accrue only if probable AND estimable; reasonably possible → disclose."),
  ]],
]);

unit(T, "t07", "07. Financial Accounting", "External reporting: the five statements, notes, and the conceptual framework", [
  ["Financial vs. Managerial; the Statements", "Financial accounting produces GAAP statements for external users. The full set: income statement, statement of comprehensive income, balance sheet, statement of cash flows, statement of stockholders' equity + notes.", [
    mc("Financial accounting differs from managerial accounting because financial accounting…", ["Is optional", "Follows GAAP and serves external users", "Focuses on future budgets", "Is only for tax"], 1, "Managerial accounting is internal and not GAAP-bound."),
    mc("Which is NOT one of the qualitative characteristics in FASB's conceptual framework?", ["Relevance", "Faithful representation", "Comparability", "Profitability"], 3, "Fundamental: relevance & faithful representation. Enhancing: comparability, verifiability, timeliness, understandability."),
    mc("Other comprehensive income (OCI) includes…", ["Sales revenue", "Unrealized gains on available-for-sale debt securities and foreign currency translation adjustments", "Cost of goods sold", "Dividends paid"], 1, "OCI items bypass net income and accumulate in AOCI (equity)."),
    mc("Earnings per share must be shown on the face of the income statement for…", ["All companies", "Public companies", "Only banks", "Nonprofits"], 1, "ASC 260 requires EPS for publicly traded entities."),
    mc("A subsequent event that provides evidence about conditions existing at the balance sheet date (e.g., customer bankruptcy confirming an uncollectible receivable) is…", ["Ignored", "Recognized — adjust the statements", "Disclosed only", "Recorded next year"], 1, "Recognized (Type I) events adjust the statements; nonrecognized (Type II) events are disclosed."),
    tf("Interim (quarterly) financial statements of public companies are audited.", false, "They are reviewed, not audited. Annual statements are audited."),
    mc("Where would a public company find the SEC's required annual report form?", ["Form 10-Q", "Form 10-K", "Form 8-K", "Form W-2"], 1, "10-K annual; 10-Q quarterly; 8-K current/material events."),
    mc("The 'multiple-step' income statement differs from 'single-step' because it…", ["Has more pages", "Shows intermediate subtotals such as gross profit and operating income", "Omits taxes", "Is required for all companies"], 1, "Multiple-step separates operating from non-operating items."),
    match("Match the user to their primary interest", [["Bank lender", "Liquidity & debt coverage"], ["Equity investor", "Earnings & growth"], ["Supplier", "Ability to pay within terms"], ["Regulator/SEC", "Compliance & full disclosure"]], "Different external users focus on different aspects of the statements."),
  ]],
]);

unit(T, "t08", "08. Adjusting Entries", "Accruals, deferrals, estimates — the heart of accrual accounting", [
  ["Accrued Expenses & Revenues", "Accrual = the economic event happened but cash hasn't moved. Every adjusting entry touches one income-statement and one balance-sheet account — never Cash.", [
    je("Dec 31: Employees earned $9,200 for Dec 26–31; payday is Jan 6.", ["Wages Expense", "Wages Payable", "Cash", "Prepaid Wages"], ["Wages Expense"], ["Wages Payable"], "Accrued expense."),
    fill("$60,000 note payable at 8% dated Nov 1. Interest is paid at maturity. Interest to accrue at Dec 31?", 800, "60,000 × 8% × 2/12 = $800."),
    je("Record the accrued interest above.", ["Interest Expense", "Interest Payable", "Cash", "Notes Payable"], ["Interest Expense"], ["Interest Payable"], "Dr Interest Expense 800 / Cr Interest Payable 800."),
    je("Company earned $2,400 of consulting fees in December that will be billed in January.", ["Accounts Receivable", "Service Revenues", "Cash", "Unearned Revenues"], ["Accounts Receivable"], ["Service Revenues"], "Accrued revenue — earned, not yet billed/collected."),
    fill("A company's property tax bill for the calendar year is $18,000, paid in arrears in the following March. Monthly accrual?", 1500, "18,000 ÷ 12 = $1,500 per month to Property Tax Expense / Property Taxes Payable."),
    mc("Failing to accrue December wages will cause…", ["Expenses overstated, liabilities overstated", "Expenses understated, net income overstated, liabilities understated", "Assets overstated", "No effect"], 1, "Missing accrual → expenses low, income high, liabilities low, equity high."),
    tf("An adjusting entry can involve the Cash account.", false, "Cash entries are transactions; adjusting entries fix timing differences that don't involve cash."),
    fill("Electricity used in December is estimated at $1,150 (bill arrives Jan 10 for $1,180). What amount is accrued at Dec 31?", 1150, "Accrue the best estimate ($1,150); the $30 difference is trued up in January (immaterial)."),
  ]],
  ["Deferrals, Depreciation & Estimates", "Deferral = cash moved first. Prepaids and unearned revenues are 'used up' over time. Depreciation and bad-debt allowances are estimates that also require adjusting entries.", [
    fill("On Oct 1 the company paid $7,200 for a one-year insurance policy (recorded in Prepaid Insurance). Insurance Expense for the year ending Dec 31?", 1800, "7,200 ÷ 12 × 3 months = $1,800."),
    je("Record the insurance adjustment above.", ["Insurance Expense", "Prepaid Insurance", "Cash", "Insurance Payable"], ["Insurance Expense"], ["Prepaid Insurance"], "Move the expired portion from asset to expense."),
    fill("Same policy, but the $7,200 was originally debited to Insurance EXPENSE. What is the Dec 31 adjusting amount to Prepaid Insurance?", 5400, "Unexpired 9 months = 5,400 → Dr Prepaid Insurance 5,400 / Cr Insurance Expense 5,400. Either original entry ends with the same balances."),
    fill("Unearned Revenue had a $12,000 balance from a 6-month contract starting Nov 1. Revenue to recognize by Dec 31?", 4000, "12,000 ÷ 6 × 2 = $4,000."),
    je("Record the revenue recognition above.", ["Unearned Revenues", "Service Revenues", "Cash", "Accounts Receivable"], ["Unearned Revenues"], ["Service Revenues"], "Liability decreases; revenue increases."),
    fill("Truck cost $48,000, salvage $6,000, 7-year life, bought April 1. Straight-line depreciation for the first (partial) year?", 4500, "(48,000 − 6,000) ÷ 7 = 6,000/yr × 9/12 = $4,500."),
    fill("Supplies account $3,900 before adjustment; physical count $1,250. Supplies Expense?", 2650, "3,900 − 1,250 = $2,650."),
    fill("A/R $200,000; management estimates 3% uncollectible. Allowance currently has a $1,400 CREDIT balance. Bad Debts Expense for the adjustment?", 4600, "Required 6,000 − existing 1,400 = $4,600 (balance-sheet approach)."),
    fill("Same facts, but the allowance had a $900 DEBIT balance before adjustment. Bad Debts Expense?", 6900, "6,000 + 900 = $6,900 to bring the allowance to a $6,000 credit."),
    mc("An adjusted trial balance differs from an unadjusted one because it…", ["Includes closing entries", "Reflects the adjusting entries and is used to prepare the statements", "Excludes expenses", "Is prepared by the bank"], 1, "Statements are built from the adjusted trial balance."),
  ]],
]);

})(window.LL);
