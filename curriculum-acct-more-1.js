/* Expansion lessons — Accounting topics 01–11. Real-world scenarios: startups, retailers, service firms, restaurants, month-end close. */
(function ({ mc, tf, dc, fill, je, match, order, addLessons }) {

addLessons("t01", [
  ["Scenario: Maria's Bakery — Month One", "Follow a brand-new business through its first month. Ask for every event: which accounts, up or down, and does it belong on the income statement or balance sheet?", [
    je("Maria opens a bakery, depositing $25,000 of personal savings into the business account.", ["Cash", "Owner's Capital", "Sales", "Loan Payable"], ["Cash"], ["Owner's Capital"], "Owner investment: asset ↑, equity ↑. Not revenue."),
    je("She signs a 12-month lease and pays the first month's rent of $2,000 plus a $2,000 security deposit.", ["Rent Expense", "Security Deposit (asset)", "Cash", "Prepaid Rent"], ["Rent Expense", "Security Deposit (asset)"], ["Cash"], "Rent for the current month is expense; the refundable deposit is an asset."),
    je("She buys an $8,000 commercial oven, paying $3,000 down and financing $5,000 with the vendor.", ["Equipment", "Cash", "Notes Payable", "Equipment Expense"], ["Equipment"], ["Cash", "Notes Payable"], "Dr Equipment 8,000; Cr Cash 3,000; Cr Notes Payable 5,000."),
    je("She purchases $1,500 of flour, sugar, and butter on account from a supplier.", ["Inventory (Ingredients)", "Accounts Payable", "Cash", "Cost of Goods Sold"], ["Inventory (Ingredients)"], ["Accounts Payable"], "Ingredients are inventory until used."),
    je("Cash sales for the month total $9,400.", ["Cash", "Sales", "Accounts Receivable", "Unearned Revenue"], ["Cash"], ["Sales"], "Revenue earned and collected."),
    je("A local café orders $1,200 of pastries weekly on 30-day terms; the first invoice is issued.", ["Accounts Receivable", "Sales", "Cash", "Unearned Revenue"], ["Accounts Receivable"], ["Sales"], "Earned but not collected — a receivable."),
    je("A customer pays a $500 deposit for a wedding cake to be delivered next month.", ["Cash", "Unearned Revenue", "Sales", "Accounts Receivable"], ["Cash"], ["Unearned Revenue"], "Not earned yet — liability."),
    fill("At month end, ingredients costing $1,100 were used. Sales were $10,600 (9,400 + 1,200). Gross profit?", 9500, "10,600 − 1,100 = $9,500."),
    fill("Other expenses: rent 2,000; wages 2,800; utilities 400. Net income for month one?", 4300, "9,500 − 5,200 = $4,300."),
    mc("Maria says: 'I have $27,900 in the bank so I made $27,900 profit.' What's wrong?", ["Nothing", "Cash ≠ profit: the bank balance includes her investment, loan proceeds, the customer deposit, and excludes unpaid A/R and A/P", "Profit is higher", "She should use cash basis"], 1, "Cash basis vs accrual basis is the first concept every owner must grasp."),
  ]],
  ["Scenario: Cash vs. Accrual Showdown", "Same business, two methods. Under cash basis, revenue = receipts and expense = payments. GAAP requires accrual. Know how to convert between them.", [
    fill("Consulting firm, December: billed $40,000; collected $28,000 (incl. $6,000 from November invoices); paid $15,000 of expenses (incl. $3,000 for November bills); incurred $19,000 of expenses. CASH-basis income?", 13000, "28,000 − 15,000 = $13,000."),
    fill("Same data. ACCRUAL-basis income?", 21000, "40,000 − 19,000 = $21,000."),
    fill("Cash receipts from customers $500,000. A/R rose from $60,000 to $85,000. Accrual revenue?", 525000, "Receipts + increase in A/R = 525,000."),
    fill("Cash paid for expenses $300,000. Accrued liabilities fell from $40,000 to $25,000; prepaid expenses rose from $10,000 to $18,000. Accrual expenses?", 277000, "300,000 − 15,000 (paid down old accruals) − 8,000 (prepaid for future) = $277,000."),
    mc("A law firm on the cash basis for tax has a huge December collection. To defer income it…", ["Mails invoices late so clients pay in January (legitimate timing)", "Backdates invoices", "Records the receipts as loans", "Ignores the deposits"], 0, "Timing of billing is legitimate; misrecording receipts is fraud."),
    mc("Which business is most likely to use cash-basis records internally but need accrual statements for a bank?", ["Public company", "Small landscaping company applying for an SBA loan", "Bank", "Insurance company"], 1, "Lenders generally want accrual statements (often reviewed or audited)."),
    tf("Under the accrual basis, a signed $100,000 contract for services to be provided next quarter is recorded as revenue when signed.", false, "Nothing is recorded at signing (no performance yet). Disclose significant commitments if relevant."),
    mc("A dentist's office receives insurance payments 45 days after treatment. Under accrual accounting revenue is recorded…", ["When the insurer pays", "On the date of treatment, at the expected collectible amount", "When the claim is filed", "At year end"], 1, "Variable consideration/implicit price concessions are estimated (ASC 606)."),
  ]],
]);

addLessons("t02", [
  ["Scenario: A Week at a Landscaping Company", "Ten transactions, ten entries. Speed and accuracy — this is what a bookkeeper does all day.", [
    je("Monday: bought a $1,800 mower on the company credit card.", ["Equipment", "Credit Card Payable", "Cash", "Equipment Expense"], ["Equipment"], ["Credit Card Payable"], "A credit card is a liability account — treat it like A/P."),
    je("Tuesday: paid crew wages of $3,200 by direct deposit (ignore withholdings).", ["Wages Expense", "Cash", "Wages Payable", "Owner's Draw"], ["Wages Expense"], ["Cash"], "Expense ↑ (debit), asset ↓ (credit)."),
    je("Wednesday: billed a commercial client $4,500 for a completed installation.", ["Accounts Receivable", "Service Revenue", "Cash", "Unearned Revenue"], ["Accounts Receivable"], ["Service Revenue"], "On account."),
    je("Wednesday: bought $600 of fuel with cash.", ["Fuel Expense", "Cash", "Inventory", "Accounts Payable"], ["Fuel Expense"], ["Cash"], "Consumed quickly → expense."),
    je("Thursday: received a $900 check from a client who was billed last month.", ["Cash", "Accounts Receivable", "Service Revenue", "Unearned Revenue"], ["Cash"], ["Accounts Receivable"], "No revenue — already recorded."),
    je("Thursday: paid $2,000 toward the credit card balance.", ["Credit Card Payable", "Cash", "Interest Expense", "Equipment"], ["Credit Card Payable"], ["Cash"], "Paying down a liability."),
    je("Friday: owner took $1,500 for personal expenses.", ["Owner's Draw", "Cash", "Wages Expense", "Owner's Capital"], ["Owner's Draw"], ["Cash"], "Never an expense."),
    je("Friday: purchased $2,400 of mulch and plants to be used on next week's jobs (on account).", ["Supplies Inventory", "Accounts Payable", "Supplies Expense", "Cash"], ["Supplies Inventory"], ["Accounts Payable"], "Not yet used → asset."),
    je("Saturday: a residential client prepaid $1,200 for a monthly maintenance plan starting next month.", ["Cash", "Unearned Revenue", "Service Revenue", "Accounts Receivable"], ["Cash"], ["Unearned Revenue"], "Cash before service = liability."),
    je("Saturday: received the $180 monthly phone bill, due in 20 days.", ["Telephone Expense", "Accounts Payable", "Cash", "Prepaid Phone"], ["Telephone Expense"], ["Accounts Payable"], "Incurred → expense now, liability until paid."),
  ]],
  ["Spot the Error", "Bookkeeping errors have signatures. Learn to diagnose from the symptom: which side is off, by how much, and whether the trial balance still balances.", [
    mc("Trial balance is off by $180. A check for $810 was recorded as $180... wait, actually as $801. Which error type explains a $9 difference?", ["Omission", "Transposition (810 vs 801: difference 9, divisible by 9)", "Slide", "Duplicate posting"], 1, "Difference ÷ 9 = 1 → digits differ by 1."),
    mc("Trial balance off by $4,500 and the difference ÷ 2 = $2,250, which equals a recent entry amount. Likely cause?", ["Transposition", "An amount posted to the wrong side (debit instead of credit)", "Omission", "Nothing"], 1, "Wrong-side posting creates a difference of double the amount."),
    mc("Trial balance balances, but Cash shows a credit balance. What happened?", ["Nothing wrong", "Likely overdraft OR receipts were posted to the wrong account / disbursements duplicated — investigate", "Normal for banks", "Debit balances are wrong"], 1, "A credit cash balance is a red flag even when the TB balances."),
    mc("Rent Expense was debited $12,000 for a full-year prepayment in January. By June, which statement item is misstated?", ["Nothing", "Expenses overstated by $6,000 and Prepaid Rent (asset) understated by $6,000", "Revenue overstated", "Cash misstated"], 1, "Reclassify: Dr Prepaid Rent 6,000 / Cr Rent Expense 6,000."),
    je("Correcting entry: a $2,500 customer payment on account was mistakenly credited to Service Revenue.", ["Service Revenue", "Accounts Receivable", "Cash", "Sales Returns"], ["Service Revenue"], ["Accounts Receivable"], "Revenue was double-counted and A/R never reduced."),
    je("Correcting entry: owner's $700 personal dinner was paid with the business card and recorded as Meals Expense.", ["Owner's Draw", "Meals Expense", "Cash", "Credit Card Payable"], ["Owner's Draw"], ["Meals Expense"], "Reclassify to draw — commingling personal and business is both a bookkeeping and a tax problem."),
    mc("A purchase of $3,000 of equipment was recorded as Supplies Expense. Effect on the current year?", ["Net income overstated", "Net income understated by $3,000 less the depreciation that should have been recorded; assets understated", "No effect", "Liabilities overstated"], 1, "Capital vs. revenue expenditure misclassification."),
    tf("A trial balance that balances proves all transactions were recorded.", false, "Complete omissions leave it balanced."),
  ]],
  ["Debit & Credit Speed Round", "Rapid-fire. Say the rule out loud: assets & expenses up = debit; liabilities, equity, revenue up = credit. Contras flip.", [
    dc("Increase Prepaid Insurance", "debit", "Asset ↑."),
    dc("Increase Unearned Revenue", "credit", "Liability ↑."),
    dc("Increase Accumulated Depreciation", "credit", "Contra-asset ↑ = credit."),
    dc("Decrease Accounts Receivable (customer pays)", "credit", "Asset ↓."),
    dc("Increase Sales Discounts", "debit", "Contra-revenue ↑ = debit."),
    dc("Increase Treasury Stock", "debit", "Contra-equity ↑ = debit."),
    dc("Decrease Wages Payable (pay the accrued wages)", "debit", "Liability ↓."),
    dc("Increase Interest Income", "credit", "Revenue ↑."),
    dc("Increase Allowance for Doubtful Accounts", "credit", "Contra-asset."),
    dc("Increase Dividends (declared)", "debit", "Reduces equity."),
    dc("Decrease Inventory (goods sold)", "credit", "Asset ↓ (and Dr COGS)."),
    dc("Increase Discount on Bonds Payable", "debit", "Contra-liability ↑ = debit."),
  ]],
]);

addLessons("t03", [
  ["Scenario: Building a Chart for a Restaurant", "A restaurant needs food/beverage cost split, tip liabilities, sales tax payable, gift card liabilities, and labor by category. Design decisions here shape every future report.", [
    mc("Owner wants to track food cost % and beverage cost % separately. Minimum accounts needed?", ["One Sales, one COGS", "Food Sales, Beverage Sales, Food COGS, Beverage COGS", "One Sales, two COGS", "Two Sales, one COGS"], 1, "Each margin needs its own revenue AND cost."),
    mc("Sales tax collected from diners should be recorded as…", ["Revenue", "Sales Tax Payable (liability)", "Sales Tax Expense", "Cash only"], 1, "It's the state's money."),
    mc("Gift cards sold but not yet redeemed are…", ["Revenue when sold", "Gift Card Liability; revenue when redeemed (breakage recognized proportionally under ASC 606)", "Other income", "A receivable"], 1, "Also watch state escheat/unclaimed property laws."),
    mc("Credit card tips collected and owed to servers at the next payroll are…", ["Wages Expense", "Tips Payable (liability)", "Revenue", "Owner's Draw"], 1, "Pass-through amounts."),
    match("Match the item to its account", [["Weekly Sysco delivery of produce", "Food Purchases / Inventory"], ["Kitchen hood cleaning", "Repairs & Maintenance"], ["Health permit renewal", "Licenses & Permits"], ["Server wages", "Front-of-House Labor"], ["Comped meals for complaints", "Promotional / Comp Expense (or contra-revenue)"], ["Uber Eats commission", "Delivery Platform Fees"]], "Granular expense accounts make the P&L actionable."),
    mc("The owner asks for a 'prime cost' figure. Which accounts feed it?", ["Rent + utilities", "COGS (food + beverage) + total labor incl. payroll taxes and benefits", "Marketing", "All expenses"], 1, "Prime cost should typically be under ~60–65% of sales."),
    mc("Restaurant receives a $50,000 tenant improvement allowance from the landlord. Chart treatment?", ["Revenue", "Lease incentive — reduces the ROU asset / deferred and amortized against rent expense over the lease (ASC 842)", "Owner's capital", "Ignore"], 1, "Not income when received."),
    tf("A single 'Payroll' expense account is sufficient for a restaurant.", false, "Split at minimum: kitchen, front-of-house, management, payroll taxes, benefits — labor is the largest controllable cost."),
  ]],
  ["Scenario: Cleaning Up a Messy Chart", "You inherit QuickBooks with 480 accounts, 6 different 'Office Supplies' variants, and expenses posted to balance sheet accounts. Triage.", [
    order("Order your cleanup steps", ["Back up the file and print a trial balance", "Review each account's activity and purpose", "Merge duplicate accounts (Office Supplies, Office supply, Supplies-office)", "Reclassify misposted transactions with journal entries", "Deactivate unused accounts (don't delete ones with history)", "Document the new chart with account definitions"], "Never delete history; document so it stays clean."),
    mc("You find $40,000 of vendor bills posted to 'Ask My Accountant'. This is…", ["Fine — it's a real account", "A suspense/clearing account that must be zero at period end; each item must be classified", "An expense", "An asset"], 1, "Suspense accounts are temporary parking, never a reporting line."),
    mc("A balance sheet account 'Uncategorized Asset' holds $12,300 from bank-feed imports. Most likely these are…", ["Real assets", "Miscoded transactions that need review and reclassification to the proper expense/asset/liability", "Owner investments", "Loans"], 1, "Bank feeds default unmatched items to uncategorized accounts."),
    mc("Two accounts exist: 'Loan – Truck' with a $0 balance since 2022 and history. Action?", ["Delete it", "Mark inactive", "Merge into Cash", "Rename to Misc"], 1, "Inactive preserves prior-year reports."),
    mc("The prior bookkeeper put all Amazon purchases in one account 'Amazon'. The correct fix is…", ["Keep it — easy to reconcile", "Classify by what was bought (supplies, equipment, COGS) — the vendor is not the account", "Move to COGS", "Move to Owner's Draw"], 1, "Accounts describe the nature of the item, not the seller."),
    mc("Negative balance in Accounts Payable on the balance sheet indicates…", ["Strong liquidity", "Payments recorded without matching bills (or duplicate payments) — bills weren't entered before paying", "Vendor discounts", "Normal"], 1, "A/P workflow break: bills must be entered so payments can be applied."),
    fill("After cleanup: 480 accounts → you keep 95 active. If 6 duplicates of Office Supplies had balances 1,200; 340; 90; 2,050; 15; 700, the merged Office Supplies balance is…", 4395, "Sum = $4,395."),
    tf("Renaming an existing account changes all its historical transactions to the new name in reports.", true, "Which is why renames should be deliberate — better to create a new account when the purpose changes."),
  ]],
]);

addLessons("t04", [
  ["Scenario: Month-End Close Checklist", "A disciplined close is repeatable: reconcile, accrue, review, report. Learn the sequence and the checks a controller performs.", [
    order("Order the month-end close", ["Record all bills and invoices dated within the month (cut-off)", "Reconcile bank and credit card accounts", "Reconcile A/R and A/P subledgers to the GL", "Record accruals, prepaid amortization, depreciation", "Review the P&L and balance sheet for anomalies (flux analysis)", "Lock the period and issue reports"], "Reconcile before you accrue; review before you lock."),
    mc("A/R aging total is $148,200; the A/R general ledger account shows $151,700. First step?", ["Adjust the GL to match", "Investigate — likely a journal entry posted directly to A/R without a customer, or an unapplied payment", "Ignore the $3,500", "Write it off"], 1, "Subledger-to-GL differences are always caused by direct GL postings or system glitches."),
    mc("Flux analysis shows Utilities Expense doubled versus last month. Best explanation to look for first?", ["Fraud", "Two months' bills recorded this month (missing accrual last month or duplicate entry)", "Rate increase", "Weather"], 1, "Timing errors are the most common cause of monthly swings."),
    mc("The credit card statement closes on the 20th. For a proper month-end, you should…", ["Record only the statement", "Record all transactions through month end (use the online activity), accruing the 21st–31st", "Skip until next statement", "Estimate"], 1, "Cut-off is by transaction date, not statement date."),
    mc("A recurring journal entry for insurance amortization was accidentally posted twice. Symptoms?", ["Prepaid Insurance too high", "Prepaid Insurance too low and Insurance Expense too high by one month's amount", "Cash wrong", "No symptom"], 1, "Tie prepaid schedules to the GL every month."),
    tf("Once the period is locked, an error found later should be corrected in the current open period (unless material enough to reopen/restate).", true, "Locking prevents silent changes to issued reports."),
    mc("A vendor invoice dated Sept 28 for services in October arrives Oct 3. Record as…", ["September expense", "October expense (service date drives recognition); if paid in September, it's a prepaid", "Split", "When paid"], 1, "Invoice date ≠ service period."),
    mc("The controller's 'balance sheet review' focuses on…", ["Only cash", "Every balance sheet account tied to a supporting schedule or reconciliation", "Revenue growth", "Payroll"], 1, "If the balance sheet is right, the P&L is right."),
  ]],
  ["Scenario: Special Journals & Subledgers at a Wholesaler", "High-volume businesses use special journals and subledgers. Know which journal each transaction goes to and how totals post to control accounts.", [
    match("Which special journal?", [["Credit sale to a customer", "Sales journal"], ["Purchase of inventory on account", "Purchases journal"], ["Customer payment received", "Cash receipts journal"], ["Payment to a vendor", "Cash disbursements journal"], ["Depreciation entry", "General journal"], ["Cash sale", "Cash receipts journal"]], "Cash journals capture ALL cash in/out regardless of source."),
    mc("At month end, the Sales journal total of $284,000 is posted as…", ["Individual entries only", "One entry: Dr Accounts Receivable control 284,000 / Cr Sales 284,000; individual customer accounts posted daily to the subledger", "Dr Cash", "Nothing"], 1, "Control account gets the total; subledger gets the detail."),
    mc("The Accounts Receivable control account should equal…", ["Total sales", "The sum of all customer balances in the A/R subsidiary ledger", "Cash receipts", "Total invoices"], 1, "Reconcile monthly."),
    mc("A customer returns goods purchased on account. Record in…", ["Sales journal", "General journal (Dr Sales Returns / Cr A/R) or a sales returns journal if volume is high", "Cash receipts", "Purchases journal"], 1, "Non-routine → general journal."),
    mc("In a cash receipts journal, the 'Sundry/Other' column is for…", ["Cash sales", "Infrequent credits like Notes Payable proceeds or equipment sales, posted individually", "Customer payments", "Errors"], 1, "Special columns for frequent accounts; sundry for everything else."),
    fill("Cash receipts journal for the week: A/R collections 62,000; cash sales 18,500; loan proceeds 25,000; sales discounts taken by customers 900. Total debit to Cash?", 104600, "62,000 − 900 + 18,500 + 25,000 = 104,600 (discounts reduce cash collected)."),
    tf("Modern accounting software still uses the special journal concept — invoices, bills, receive payments, and pay bills modules post to control accounts.", true, "The vocabulary changed; the architecture didn't."),
  ]],
]);

addLessons("t05", [
  ["Transaction Analysis Drill", "For each event, state the effect on Assets (A), Liabilities (L), Equity (E). If the equation doesn't balance, your analysis is wrong.", [
    mc("Purchase supplies for $400 cash.", ["A +400/−400; no L, E", "A +400; L +400", "A −400; E −400", "E +400"], 0, "Asset swap."),
    mc("Receive utility bill $250, unpaid.", ["A −250", "L +250; E −250", "L −250", "A +250; L +250"], 1, "Expense reduces equity; liability rises."),
    mc("Perform services for $1,800: $1,000 cash, $800 on account.", ["A +1,800; E +1,800", "A +1,000; E +1,000", "A +1,800; L +800", "E +800"], 0, "Cash 1,000 + A/R 800 = 1,800 assets; revenue 1,800 equity."),
    mc("Pay $500 of the utility bill from earlier.", ["A −500; E −500", "A −500; L −500", "L −500; E +500", "No effect"], 1, "Settle liability."),
    mc("Declare and pay a $2,000 dividend.", ["A −2,000; E −2,000", "A −2,000; L −2,000", "E −2,000 only", "L +2,000"], 0, "Cash down, retained earnings down."),
    mc("Sign a contract to hire a manager at $6,000/month starting next month.", ["L +6,000", "E −6,000", "No effect — no transaction has occurred", "A +6,000"], 2, "Executory contracts aren't recorded."),
    mc("Buy land for $100,000: $20,000 cash + $80,000 mortgage.", ["A +100,000; L +100,000", "A +80,000; L +80,000", "A +100,000/−20,000; L +80,000", "E +20,000"], 2, "Net assets +80,000; liabilities +80,000."),
    fill("Start: A 300,000; L 120,000. During the year: revenue 250,000; expenses 190,000; owner draws 20,000; new loan 50,000; loan repayment 30,000. Ending equity?", 220000, "180,000 + 60,000 − 20,000 = 220,000 (loans don't affect equity)."),
    fill("Same data. Ending liabilities?", 140000, "120,000 + 50,000 − 30,000 = 140,000."),
    fill("Same data. Ending assets?", 360000, "L 140,000 + E 220,000 = 360,000."),
  ]],
  ["Scenario: Reconstructing Missing Records", "A client lost records in a flood. Using the accounting equation and known relationships, reconstruct what you can.", [
    fill("Year-end equity $410,000; beginning equity $350,000; owner investments $40,000; withdrawals $65,000. Net income?", 85000, "410 = 350 + 40 − 65 + NI → NI = 85,000."),
    fill("Beginning A/R $52,000; credit sales $610,000; ending A/R $47,000; write-offs $3,000. Cash collected from customers?", 612000, "52 + 610 − 3 − 47 = 612,000."),
    fill("Beginning A/P $38,000; ending A/P $44,000; payments to vendors $402,000. Purchases on account?", 408000, "38 + P − 402 = 44 → P = 408,000."),
    fill("Beginning inventory $90,000; purchases $408,000; gross margin 35% on sales of $640,000. Ending inventory?", 82000, "COGS = 416,000; 90 + 408 − 416 = 82,000."),
    fill("Cash beginning $25,000; collections 612,000; vendor payments 402,000; other expenses paid 150,000; loan proceeds 40,000; draws 65,000. Ending cash?", 60000, "25 + 612 − 402 − 150 + 40 − 65 = 60,000."),
    mc("The bank confirms a $60,000 balance — matching your reconstruction. This gives…", ["Proof of no fraud", "Reasonable assurance the reconstruction is internally consistent (a strong control check)", "Nothing", "Audit opinion"], 1, "Independent confirmation of a derived number is powerful evidence."),
    tf("If reconstructed assets exceed reconstructed liabilities plus equity, the difference can simply be booked to equity.", false, "The difference means something is missing or wrong — investigate; never plug."),
  ]],
]);

addLessons("t06", [
  ["Applying Principles to Real Cases", "Principles aren't trivia — they decide how real transactions get recorded. Each case has a principle that governs the answer.", [
    mc("A software company signs a 3-year support contract paid upfront ($36,000). Recording it all as year-1 revenue violates…", ["Cost principle", "Revenue recognition / matching", "Monetary unit", "Economic entity"], 1, "Recognize $12,000 per year as the service is provided."),
    mc("The owner pays her home mortgage from the business account and records it as Rent Expense. Violated principle?", ["Economic entity", "Going concern", "Cost", "Conservatism"], 0, "Personal ≠ business."),
    mc("A company's factory is worth $10M on the market; it's on the books at $3M cost less depreciation. Recording it at $10M would violate…", ["Cost principle (and reliability/verifiability)", "Matching", "Time period", "Materiality"], 0, "Historical cost is verifiable; management's market estimate isn't."),
    mc("A distributor expects 4% of sales to be returned. Recording a return allowance at the time of sale reflects…", ["Cost principle", "Matching / conservatism (and ASC 606 variable consideration)", "Going concern", "Monetary unit"], 1, "Estimate returns in the sale period."),
    mc("A company changes its fiscal year-end reporting from December to June without disclosure. Violated?", ["Time period + full disclosure + consistency", "Cost", "Entity", "Monetary unit"], 0, "Transition periods must be disclosed and reported."),
    mc("Management learns a major customer (30% of A/R) filed bankruptcy after year end but before statements were issued. Principle?", ["Ignore — after year end", "Full disclosure / recognized subsequent event — adjust the allowance", "Cost", "Materiality — ignore if under 5%"], 1, "Condition (customer's insolvency) existed at year end."),
    mc("A company expenses a $200,000 machine because 'it's easier'. Violated?", ["Materiality — the amount is clearly material; matching requires capitalization and depreciation", "Conservatism supports it", "Going concern", "None"], 0, "Conservatism doesn't justify deliberately understating assets/income."),
    mc("A firm switches from LIFO to FIFO and restates prior years. The restatement satisfies…", ["Cost principle", "Consistency and comparability (ASC 250 retrospective application)", "Monetary unit", "Time period"], 1, "Users can compare across years."),
    mc("A company in Argentina with 100%+ inflation reports in nominal pesos without adjustment. Which assumption is strained?", ["Economic entity", "Monetary unit (stable currency) — highly inflationary economies require remeasurement under ASC 830", "Going concern", "Time period"], 1, "Highly inflationary = ~100% cumulative over 3 years."),
    tf("GAAP allows a company to choose the accounting treatment that best presents its results even when it contradicts a specific standard, if disclosed.", false, "No 'true and fair override' in U.S. GAAP (unlike IFRS in extremely rare cases)."),
  ]],
  ["Ethics & Professional Judgment", "Bookkeepers and accountants face pressure. Know the AICPA Code fundamentals: integrity, objectivity, due care, confidentiality — and what to do when asked to bend.", [
    mc("The owner asks you to 'hold' December invoices until January so the year looks less profitable for taxes. Correct response?", ["Comply — it's the owner's business", "Decline; deferring revenue that was earned is misstatement and tax fraud — explain legitimate planning alternatives", "Do it once", "Ask the bank"], 1, "Legitimate alternatives: accelerate deductible expenses, retirement contributions, equipment purchases."),
    mc("A client asks you to record a $15,000 personal vacation as 'travel – client meetings'. This is…", ["A gray area", "Tax fraud and a misstatement; refuse and document your advice", "Acceptable if under 10%", "Fine if the client signs"], 1, "Your license/reputation is on the line."),
    mc("You discover the prior bookkeeper embezzled $40,000 via fake vendors. First step?", ["Confront the bookkeeper", "Preserve evidence and report to the owner/those charged with governance; recommend a forensic review and law enforcement", "Fix the books quietly", "Ignore — before your time"], 1, "Don't tip off or alter evidence."),
    mc("A bank asks you (the company's external bookkeeper) to 'confirm the company is profitable'. You should…", ["Confirm verbally", "Provide only what the client authorizes in writing; a compilation/review report if engaged; never opine beyond your engagement", "Send the tax return", "Refuse always"], 1, "Confidentiality + scope of engagement."),
    mc("The CFO records a $2M 'consulting accrual' with no support on the last day of the quarter to hit an EPS target. Auditors call this…", ["Aggressive but OK", "Earnings management via cookie-jar reserve — a misstatement; potential fraud", "Conservatism", "Matching"], 1, "Reserves must be supported by a probable, estimable obligation."),
    tf("A bookkeeper who is not a CPA has no ethical obligations regarding financial misstatement.", false, "Fraud statutes and professional standards (AIPB, NACPB) apply, and aiding tax fraud is criminal regardless of credentials."),
    mc("Independence matters most for…", ["Bookkeepers", "Auditors issuing an opinion on financial statements", "Tax preparers", "Controllers"], 1, "An auditor cannot audit books they prepared (public companies) — SOX restrictions."),
    mc("A client refuses to correct a material error you discovered. You should…", ["Sign anyway", "Document, escalate, consider withdrawing from the engagement", "Fix it secretly", "Call the IRS immediately"], 1, "Withdrawal is the last resort; consult professional liability counsel."),
  ]],
]);

addLessons("t07", [
  ["Reading a 10-K", "The annual report is more than statements: MD&A, risk factors, notes, auditor's report, and internal control opinion. Know where to find what.", [
    match("Where in the 10-K?", [["Discussion of why revenue changed", "MD&A (Item 7)"], ["Significant accounting policies", "Note 1 to the statements"], ["Auditor's opinion", "Item 8 / Report of Independent Registered Public Accounting Firm"], ["Legal proceedings", "Item 3"], ["Executive compensation", "Proxy (DEF 14A), incorporated by reference"], ["Litigation contingencies detail", "Notes — Commitments and Contingencies"]], "Analysts read notes and MD&A before the numbers."),
    mc("An unqualified (clean) audit opinion means…", ["The company is profitable", "The statements are fairly presented, in all material respects, in conformity with GAAP", "No fraud exists", "The company will survive"], 1, "Reasonable assurance, not a guarantee."),
    mc("A 'going concern' emphasis paragraph indicates…", ["Bankruptcy filed", "Substantial doubt about the entity's ability to continue for 12 months from issuance", "A clean opinion", "Fraud"], 1, "Management must evaluate under ASC 205-40 as well."),
    mc("Critical Audit Matters (CAMs) in the auditor's report are…", ["Errors found", "Matters that involved especially challenging, subjective, or complex auditor judgment (e.g., goodwill impairment, revenue estimates)", "Fraud findings", "Management letter points"], 1, "PCAOB AS 3101."),
    mc("SOX 404 requires management of accelerated filers to…", ["File weekly", "Assess and report on internal control over financial reporting, with auditor attestation", "Disclose salaries", "Use IFRS"], 1, "Material weaknesses must be disclosed."),
    mc("Non-GAAP measures (e.g., 'Adjusted EBITDA') in an earnings release must…", ["Be avoided", "Be reconciled to the most directly comparable GAAP measure, with GAAP given equal or greater prominence (Reg G / Item 10(e))", "Replace GAAP", "Be audited"], 1, "SEC scrutinizes misleading non-GAAP adjustments."),
    mc("Segment reporting (ASC 280) requires disclosure by…", ["Product only", "Operating segments as reviewed by the chief operating decision maker (CODM), incl. significant segment expenses (ASU 2023-07)", "Geography only", "Nothing"], 1, "Management approach."),
    tf("Form 8-K must be filed within 4 business days of certain material events (e.g., CEO departure, acquisition, auditor change).", true, "Current reporting keeps the market informed between periodic reports."),
  ]],
  ["Framework Concepts in Practice", "Recognition, measurement, and presentation choices come from the conceptual framework. Elements: assets, liabilities, equity, revenues, expenses, gains, losses, investments by/distributions to owners, comprehensive income.", [
    mc("Under FASB Concepts Statement 8, an asset is…", ["Anything valuable", "A present right of the entity to an economic benefit", "Cash only", "Something purchased"], 1, "Control and future benefit — why internally generated brands aren't assets (measurement problem)."),
    mc("A liability requires…", ["A signed contract", "A present obligation to transfer an economic benefit", "Cash payment", "Legal enforceability only"], 1, "Constructive obligations count (e.g., an established refund practice)."),
    mc("Which measurement attribute is used for inventory under LCNRV?", ["Historical cost only", "Lower of historical cost or net realizable value", "Fair value", "Present value"], 1, "Mixed-attribute model."),
    mc("Fair value hierarchy Level 3 inputs are…", ["Quoted prices in active markets", "Observable inputs other than quoted prices", "Unobservable inputs (management's own assumptions)", "Cost"], 2, "Level 3 requires the most disclosure."),
    mc("A 'gain' differs from 'revenue' because a gain…", ["Is larger", "Arises from peripheral or incidental transactions (e.g., selling a used truck) rather than ongoing major operations", "Is tax-free", "Is in OCI"], 1, "Presentation matters for predicting future results."),
    mc("The cost constraint says…", ["Never spend on accounting", "Benefits of information should justify the cost of providing it", "Use cost principle", "Costs must be capitalized"], 1, "Why private companies get simplifications (PCC alternatives)."),
    mc("Private companies may elect (PCC alternative) to…", ["Skip financial statements", "Amortize goodwill over 10 years and use a simplified impairment test", "Ignore leases", "Use cash basis under GAAP"], 1, "ASU 2014-02."),
    tf("Materiality is a purely quantitative threshold (e.g., 5% of net income).", false, "Qualitative factors matter: turning a loss into a profit, covenant compliance, executive bonuses, concealing a trend (SAB 99)."),
  ]],
]);

addLessons("t08", [
  ["Scenario: Year-End Adjustments for a Gym", "FitZone's trial balance before adjustments. Prepare every adjusting entry, then compute the corrected net income.", [
    fill("Unearned Membership Revenue shows $96,000: 200 annual memberships sold on Oct 1 at $480 each. Revenue earned by Dec 31?", 24000, "96,000 × 3/12 = $24,000."),
    je("Record the membership revenue earned.", ["Unearned Membership Revenue", "Membership Revenue", "Cash", "Accounts Receivable"], ["Unearned Membership Revenue"], ["Membership Revenue"], "Liability → revenue as the year of access passes."),
    fill("Equipment $240,000; 8-year life; no salvage; a $60,000 batch was added Sept 1. Total depreciation for the calendar year (straight-line)?", 25000, "180,000 ÷ 8 = 22,500 full year + 60,000 ÷ 8 × 4/12 = 2,500 → $25,000."),
    fill("Trainers earn $1,200/day; Dec 31 is a Wednesday; they're paid on Fridays for Mon–Fri. Wages to accrue?", 3600, "Mon–Wed = 3 days × 1,200 = $3,600."),
    fill("A $50,000 bank loan at 7.2% was taken Nov 1; interest payable quarterly. Accrued interest at Dec 31?", 600, "50,000 × 7.2% × 2/12 = $600."),
    fill("Prepaid Insurance $9,000 was recorded May 1 for 12 months. Expired by Dec 31?", 6000, "9,000 × 8/12 = $6,000."),
    fill("Supplies on hand at start $2,200; purchased $5,600 (expensed when bought); count at year end $1,900. Adjustment to Supplies (asset)?", -300, "Asset should be 1,900 vs. 2,200 → decrease asset $300; expense = 5,600 + 300 = 5,900."),
    fill("Personal training sessions delivered Dec 28–31 worth $2,400 haven't been billed. Unadjusted net income was $61,000. Compute ADJUSTED net income using all items above (revenue +24,000, +2,400; expenses: dep 25,000, wages 3,600, interest 600, insurance 6,000, supplies 300).", 51900, "61,000 + 26,400 − 35,500 = $51,900."),
    mc("The gym's owner protests: 'We collected $96,000 — that's revenue!' Your explanation?", ["He's right", "Members paid for 12 months of access; we've delivered 3 — the rest is an obligation. Recognizing it all would overstate this year and understate next year", "Record half", "It's a gain"], 1, "Deferred revenue is one of the most common owner misconceptions."),
  ]],
  ["Scenario: Adjustments Missed — Effects Analysis", "An auditor found these omissions. For each, determine the effect on assets, liabilities, equity, net income (O = overstated, U = understated).", [
    mc("Failed to record $4,000 of accrued interest expense.", ["Liabilities U; NI O; equity O", "Assets O", "Liabilities O; NI U", "No effect"], 0, "Missing expense and payable."),
    mc("Failed to adjust Prepaid Rent for $3,000 that expired.", ["Assets U", "Assets O; expenses U; NI O; equity O", "Liabilities O", "NI U"], 1, "Asset should have been reduced."),
    mc("Failed to record $2,500 of revenue earned but unbilled.", ["Assets U; revenue U; NI U; equity U", "Liabilities U", "Assets O", "Equity O"], 0, "Missing receivable and revenue."),
    mc("Failed to reduce Unearned Revenue for $6,000 earned.", ["Assets O", "Liabilities O; revenue U; NI U; equity U", "NI O", "No effect on equity"], 1, "Liability too high, revenue too low."),
    mc("Recorded depreciation of $8,000 twice.", ["Assets U; expenses O; NI U; equity U", "Assets O", "Liabilities U", "NI O"], 0, "Over-expensed."),
    mc("Counted $1,500 of supplies as still on hand that were actually used.", ["Assets O; expenses U; NI O", "Assets U", "Liabilities O", "No effect"], 0, "Physical count errors flow straight to income."),
    fill("Unadjusted NI $120,000. Omitted: accrued expenses 4,000; expired prepaid 3,000; unbilled revenue 2,500; unearned revenue earned 6,000; depreciation double-counted 8,000. Correct NI?", 129500, "120 − 4 − 3 + 2.5 + 6 + 8 = 129,500."),
    tf("Errors in adjusting entries affect both the income statement and the balance sheet.", true, "Because every adjusting entry spans both statements."),
  ]],
  ["Advanced Adjustments", "Estimates, contingencies, and multi-period items: warranties, bonuses, vacation, sales tax, and 'the bill that never comes'.", [
    fill("Sales $2,000,000; historical warranty cost 1.5% of sales; warranty repairs actually performed this year $22,000; beginning Warranty Liability $9,000. Ending Warranty Liability?", 17000, "9,000 + 30,000 accrued − 22,000 used = $17,000."),
    je("Record the warranty accrual of $30,000.", ["Warranty Expense", "Warranty Liability", "Cash", "Inventory"], ["Warranty Expense"], ["Warranty Liability"], "Estimate in the sale period."),
    je("Record $22,000 of warranty repairs performed (parts from inventory $14,000, technician wages paid $8,000).", ["Warranty Liability", "Inventory", "Cash", "Warranty Expense"], ["Warranty Liability"], ["Inventory", "Cash"], "Actual costs reduce the liability, not expense."),
    fill("Year-end bonus pool is 10% of pretax income before bonus. Pretax income before bonus $550,000. Bonus accrual?", 55000, "Simple case: 10% × 550,000 = $55,000. (If bonus is 10% of income AFTER bonus: B = 0.10 × (550,000 − B) → B = $50,000.)"),
    fill("Employees earn 15 vacation days/yr; 40 employees; average daily wage $220; 25% of days earned this year remain unused at year end. Vacation liability to accrue for unused days?", 33000, "40 × 15 × 25% = 150 days × 220 = $33,000."),
    mc("The company is being sued for $1M. Counsel says loss is probable and most likely $300,000, range $200k–$600k. Accrue…", ["$0", "$300,000 (best estimate within the range) and disclose the range", "$1M", "$600,000"], 1, "If no best estimate, accrue the low end and disclose."),
    mc("A vendor never sends the December invoice for $4,800 of contracted services. You should…", ["Skip the expense", "Accrue $4,800 based on the contract; reverse when the invoice arrives", "Wait", "Record half"], 1, "The expense was incurred regardless of billing."),
    mc("Sales tax of $18,000 was collected in December and is remitted Jan 20. At Dec 31 it is…", ["Revenue", "Sales Tax Payable — a current liability", "Expense", "Nothing until paid"], 1, "Never revenue."),
    tf("Reversing entries should be made for the warranty accrual.", false, "Reversals are for accruals that will be settled with a routine cash entry (wages, interest), not estimated liabilities that persist."),
  ]],
]);

addLessons("t09", [
  ["Scenario: Full Statement Set from a Trial Balance", "Ridge Consulting's adjusted trial balance. Build the income statement, retained earnings statement, and classified balance sheet — and prove they tie.", [
    fill("Adjusted TB (000s): Service Revenue 820; Salaries 410; Rent 96; Depreciation 38; Insurance 12; Interest expense 9; Income tax 51. Net income?", 204, "820 − 616 = 204.", { unit: "K" }),
    fill("Beginning Retained Earnings 310; dividends 60. Ending RE? (000s)", 454, "310 + 204 − 60 = 454.", { unit: "K" }),
    fill("Balance sheet (000s): Cash 95; A/R 130; Prepaid insurance 6; Equipment 420; Accumulated depreciation 114; A/P 41; Salaries payable 22; Income tax payable 15; Notes payable (due in 3 yrs) 150; Common stock ?; RE 454. Total assets?", 537, "95 + 130 + 6 + (420 − 114) = 537.", { unit: "K" }),
    fill("Same balance sheet. Common stock must be…", -145, "Total L 228 + RE 454 = 682 > assets 537 — impossible! This trial balance has an error of 145 (as a negative plug). Answer: a −145 plug signals the data doesn't tie; find the error before issuing.", { unit: "K", tol: 1 }),
    mc("You found it: Equipment should be 565, not 420. Now assets = 682 and Common Stock = 0? What does that tell you?", ["Fine", "Still suspicious — a corporation with zero common stock is unlikely; verify the equity section with the incorporation documents", "Issue statements", "Change RE"], 1, "Statements must tie AND make sense."),
    fill("Current assets (95 + 130 + 6) ÷ current liabilities (41 + 22 + 15). Current ratio? (2 decimals)", 2.96, "231 ÷ 78 = 2.96.", { unit: "x", tol: 0.01 }),
    mc("Where does the $150 note payable appear?", ["Current liabilities", "Long-term liabilities", "Equity", "Not shown"], 1, "Due beyond 12 months and no current portion mentioned."),
    tf("If the balance sheet doesn't balance after preparing statements, the most likely cause is an error in transferring net income or dividends to retained earnings.", true, "Check articulation first."),
  ]],
  ["Interpreting Statements for Decisions", "A lender, an investor, and a buyer each read the same statements differently. Practice drawing conclusions.", [
    mc("Company A: revenue +25%, net income −10%, operating cash flow −40%. Best summary?", ["Great growth", "Growth is being bought — margins compressing and cash consumed; check receivables, pricing, and cost structure", "Fraud", "Seasonal"], 1, "Growth without profit or cash is a warning."),
    mc("A buyer of a small business sees owner's salary of $0 and net income of $150,000. Normalized earnings should…", ["Stay $150,000", "Subtract a market salary for the owner's role (e.g., $90,000) → ~$60,000 normalized", "Add back rent", "Double"], 1, "Seller's discretionary earnings vs. true economic profit."),
    mc("A lender sees debt-to-equity of 4.0 and interest coverage of 1.2×. Likely decision?", ["Approve easily", "Decline or require collateral/guarantees — thin coverage and high leverage", "Increase the loan", "Ignore ratios"], 1, "Coverage below ~1.5× is danger territory."),
    mc("Inventory grew 60% while sales grew 8%. Ask management about…", ["Nothing", "Obsolescence, purchasing discipline, or a strategic build ahead of a launch/tariff", "Revenue recognition", "Debt"], 1, "Inventory build has to be explained."),
    mc("A nonprofit's statements show 90% of net assets are donor-restricted for a building. Liquidity implication?", ["Very liquid", "Operating liquidity may be tight — the liquidity disclosure will show what's actually available", "No implication", "Insolvent"], 1, "Restricted ≠ available."),
    mc("Deferred revenue jumped 80% year over year for a SaaS company. Interpretation?", ["Bad — liabilities up", "Positive leading indicator — customers prepaid for future service; revenue will follow", "Neutral", "Fraud"], 1, "Context-dependent: liabilities aren't always bad."),
    mc("Two identical bakeries; one leases its building (operating lease), the other owns it with a mortgage. Comparing 'debt' fairly requires…", ["Ignoring leases", "Including lease liabilities (ASC 842 now puts them on the balance sheet) and comparing EBITDAR", "Only mortgages", "Nothing"], 1, "Normalize for financing structure."),
    tf("A company with negative equity is always insolvent.", false, "Book equity can be negative due to buybacks/dividends while the company is highly profitable (e.g., some large consumer brands)."),
  ]],
]);

addLessons("t10", [
  ["Scenario: Prepare a Classified Balance Sheet", "Bluewater Marine's year-end accounts are given in random order. Classify every item and compute subtotals.", [
    fill("Current assets: Cash 48,000; A/R 112,000; Allowance (9,000); Inventory 236,000; Prepaid 14,000; Short-term investments 30,000. Total current assets?", 431000, "48 + 103 + 236 + 14 + 30 = 431,000."),
    fill("PP&E: Land 150,000; Building 600,000; Equipment 280,000; Accumulated depreciation—building 210,000; Accumulated depreciation—equipment 165,000. Net PP&E?", 655000, "1,030,000 − 375,000 = 655,000."),
    fill("Other: Goodwill 90,000; Patent (net) 35,000; Long-term note receivable 50,000. Total assets?", 1261000, "431 + 655 + 175 = 1,261,000."),
    fill("Current liabilities: A/P 98,000; Accrued expenses 27,000; Unearned revenue 41,000; Current portion of LTD 60,000; Income tax payable 19,000. Total?", 245000, "Sum = 245,000."),
    fill("Long-term: Mortgage payable (total 480,000, of which 60,000 current); Deferred tax liability 32,000. Total liabilities?", 697000, "245 + 420 + 32 = 697,000."),
    fill("Equity: Common stock 200,000; APIC 150,000; Retained earnings ?; Treasury stock (26,000). Retained earnings must be…", 240000, "Equity = 1,261 − 697 = 564; 564 − 200 − 150 + 26 = 240,000."),
    fill("Working capital?", 186000, "431,000 − 245,000."),
    mc("The long-term note receivable is from the company's CEO. Presentation?", ["Same as any receivable", "Separately disclosed as a related-party receivable (and often a governance red flag; prohibited for public company executives under SOX 402)", "Netted against salary", "Written off"], 1, "Related-party transactions require disclosure."),
  ]],
  ["Balance Sheet Judgment Calls", "Classification questions that trip up practitioners: restricted cash, refinancing, contingencies, and deposits.", [
    mc("Cash of $200,000 is legally restricted as loan collateral for 5 years. Classification?", ["Cash and equivalents", "Noncurrent restricted cash, disclosed; reconciled in the cash flow statement (ASU 2016-18)", "Current asset", "Liability"], 1, "Restricted for long-term purpose → noncurrent."),
    mc("A 90-day Treasury bill bought 30 days before year end is…", ["Investment", "Cash equivalent (original maturity ≤ 3 months)", "Restricted", "Receivable"], 1, "Original maturity from purchase date, not remaining."),
    mc("A $2M note matures in 8 months. Before the statements are issued, the company signs a binding 5-year refinancing. Classify the note as…", ["Current", "Noncurrent — intent and ability to refinance demonstrated (ASC 470-10-45)", "Half current", "Equity"], 1, "The post-balance-sheet agreement qualifies."),
    mc("Customer deposits on custom orders that will ship in 14 months are…", ["Current liability (operating cycle)", "Noncurrent liability if the operating cycle is ≤ 1 year and delivery is > 12 months out", "Revenue", "Equity"], 1, "Match classification to expected settlement timing."),
    mc("A line of credit with $500,000 drawn is due on demand but the bank has never called it. Classification?", ["Noncurrent", "Current — due on demand", "Equity", "Off-balance-sheet"], 1, "Demand feature controls."),
    mc("Inventory of a home builder (houses taking 18 months to complete) is…", ["Noncurrent", "Current — within the operating cycle", "PP&E", "Investment"], 1, "Operating cycle exception."),
    mc("A deferred tax asset arising from an NOL is presented as…", ["Current", "Noncurrent (all deferred taxes are noncurrent under ASU 2015-17), net against DTLs of the same jurisdiction", "Equity", "Contra-liability"], 1, "Simplification standard."),
    tf("Accumulated depreciation may be shown as a single net figure with cost disclosed in the notes.", true, "Either presentation is acceptable if the components are disclosed."),
  ]],
]);

addLessons("t11", [
  ["Scenario: Cash Crunch at a Growing Distributor", "Profitable but out of cash — the classic growth trap. Diagnose using the cash conversion cycle and prescribe fixes.", [
    fill("Annual sales $7.3M; A/R $1.2M. DSO?", 60, "1.2 ÷ 7.3 × 365 = 60 days.", { unit: "days", tol: 0.6 }),
    fill("COGS $5.11M; inventory $1.4M. DIO?", 100, "1.4 ÷ 5.11 × 365 = 100 days.", { unit: "days", tol: 0.6 }),
    fill("A/P $560,000 on COGS $5.11M. DPO?", 40, "0.56 ÷ 5.11 × 365 = 40 days.", { unit: "days", tol: 0.6 }),
    fill("Cash conversion cycle?", 120, "60 + 100 − 40 = 120 days.", { unit: "days", tol: 0.6 }),
    fill("Daily COGS ≈ $14,000. If DIO is cut from 100 to 70 days, cash freed?", 420000, "30 days × 14,000 = $420,000."),
    fill("If DSO is cut from 60 to 45 days (daily sales $20,000), cash freed?", 300000, "15 × 20,000 = $300,000."),
    mc("Which fix has the LOWEST cost and fastest effect?", ["Factoring receivables at 3%/month", "Enforce existing terms: statements, calls at day 31, stop shipments to 60+ day accounts", "Take a term loan", "Cut prices"], 1, "Collections discipline is free."),
    mc("Sales rep says: 'Tighter credit will kill sales.' Best response?", ["Ignore credit", "Segment customers: keep terms for prompt payers, require deposits/COD for slow payers; measure the margin lost vs. cash gained", "Stop selling on credit", "Give up"], 1, "Credit policy is a profit decision, not just a finance one."),
    mc("The company took a 2/10 net 30 discount on only 20% of purchases. Cost of missing the rest (annualized ~37%) vs. line of credit at 9%. Action?", ["Keep skipping discounts", "Draw on the line to take every discount — 9% cost vs 37% benefit", "Pay later", "Switch vendors"], 1, "Cheapest financing available."),
  ]],
  ["Liquidity Metrics & Covenants", "Loan agreements set covenants on current ratio, DSCR, leverage. Learn to compute them exactly as the bank does and to forecast breaches.", [
    fill("EBITDA $840,000; annual principal payments $300,000; interest $120,000. Debt service coverage ratio? (2 decimals)", 2, "840 ÷ 420 = 2.00×.", { unit: "x", tol: 0.01 }),
    fill("Covenant: minimum DSCR 1.25×. With debt service of $420,000, minimum EBITDA required?", 525000, "1.25 × 420,000."),
    fill("Covenant: current ratio ≥ 1.5. Current assets $900,000; current liabilities $560,000. If the company pays $100,000 of A/P with cash, new current ratio? (2 decimals)", 1.74, "800 ÷ 460 = 1.74 — paying current liabilities improves a ratio above 1.0.", { unit: "x", tol: 0.01 }),
    mc("Company wants to improve its current ratio before year end. Which action does NOT help?", ["Paying down A/P with cash (ratio > 1)", "Refinancing short-term debt into long-term", "Borrowing short-term to hold cash", "Collecting receivables early"], 2, "Adding equal current assets and liabilities pulls the ratio toward 1.0; collecting A/R is neutral (asset swap) — but the question asks what does NOT help: borrowing short-term."),
    mc("Fixed charge coverage ratio adds what to the DSCR analysis?", ["Depreciation", "Lease/rent payments (and sometimes capex, taxes, distributions) as fixed charges", "Inventory", "Goodwill"], 1, "Lenders customize definitions — read the credit agreement."),
    mc("A covenant breach at year end that the bank waives AFTER year end but before statement issuance…", ["Requires no disclosure", "Debt stays long-term if the waiver covers >1 year / bank can't demand; disclose the breach and waiver", "Requires reclassifying to current regardless", "Triggers bankruptcy"], 1, "ASC 470-10-45-1."),
    mc("Cash burn is $150,000/month; cash on hand $1.2M; a $500,000 receivable arrives in 2 months. Runway?", ["8 months", "About 11 months (1.2M + 0.5M) ÷ 150K", "12 months", "4 months"], 1, "Runway math drives fundraising timing."),
    tf("Working capital can be improved by converting inventory to receivables through sales.", false, "Both are current assets — WC rises only by the profit margin on the sale, not the inventory value."),
  ]],
]);

})(window.LL);
