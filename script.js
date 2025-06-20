document.addEventListener('DOMContentLoaded', function () {
  // Expanded tenant database for comprehensive testing
  const tenantDatabase = {
    'john smith': {
      name: 'John Smith',
      creditScore: 780,
      ltbCases: 0,
      evictionHistory: 'None',
      evictionDetails: [],
      rentHistory: 'Excellent - 5 years, always on time',
      landlordIntel: 'Quiet, respectful tenant. No complaints.',
      riskLevel: 'Low',
      lastUpdated: '2025-01-15'
    },
    'sarah johnson': {
      name: 'Sarah Johnson',
      creditScore: 720,
      ltbCases: 1,
      evictionHistory: '1 case settled out of court (2023)',
      evictionDetails: [],
      rentHistory: 'Good - occasional late payments',
      landlordIntel: 'Generally good tenant, had dispute over maintenance issues.',
      riskLevel: 'Medium',
      lastUpdated: '2025-01-10'
    },
    'mike wilson': {
      name: 'Mike Wilson',
      creditScore: 520,
      ltbCases: 3,
      evictionHistory: '2 evictions, 1 pending case',
      evictionDetails: [
        {
          property: '2-Bedroom Apartment, 123 Main St, Toronto',
          reason: 'Non-payment of rent - $3,400 arrears',
          date: 'March 2023',
          status: 'Eviction completed'
        },
        {
          property: '1-Bedroom Condo, 456 Queen St, Toronto',
          reason: 'Property damage and noise complaints',
          date: 'September 2024',
          status: 'Eviction completed'
        }
      ],
      rentHistory: 'Poor - multiple late payments and damages',
      landlordIntel: 'CAUTION: Property damage, noise complaints, rent arrears.',
      riskLevel: 'High',
      lastUpdated: '2025-01-12'
    },
    'test user': {
      name: 'Test User',
      creditScore: 850,
      ltbCases: 0,
      evictionHistory: 'None',
      evictionDetails: [],
      rentHistory: 'Excellent - 3 years, model tenant',
      landlordIntel: 'Highly recommended. Takes great care of property.',
      riskLevel: 'Low',
      lastUpdated: '2025-01-18'
    },

    // Your requested tenant profiles
    'nicholas lai': {
      name: 'Nicholas Lai',
      creditScore: 800,
      ltbCases: 0,
      evictionHistory: 'None',
      evictionDetails: [],
      rentHistory: 'Very good - 4 years, software engineer',
      landlordIntel: 'Professional tenant. Works in tech, very reliable and clean.',
      riskLevel: 'Low',
      lastUpdated: '2025-01-16'
    },
    'tula nikitopoulos': {
      name: 'Tula Nikitopoulos',
      creditScore: 843,
      ltbCases: 0,
      evictionHistory: 'None',
      evictionDetails: [],
      rentHistory: 'Excellent - 6 years, healthcare professional',
      landlordIntel: 'Outstanding tenant. Healthcare worker, very responsible and respectful.',
      riskLevel: 'Low',
      lastUpdated: '2025-01-17'
    },
    'angelika korzeniewski': {
      name: 'Angelika Korzeniewski',
      creditScore: 861,
      ltbCases: 0,
      evictionHistory: 'None',
      evictionDetails: [],
      rentHistory: 'Excellent - 5 years, finance professional',
      landlordIntel: 'Exceptional tenant. Works in finance, extremely organized and reliable. Always communicates proactively.',
      riskLevel: 'Low',
      lastUpdated: '2025-01-19'
    },
    'michael saltzman': {
      name: 'Michael Saltzman',
      creditScore: 615,
      ltbCases: 2,
      evictionHistory: '1 eviction for lease violations (2023)',
      evictionDetails: [
        {
          property: '3-Bedroom House, 789 College St, Toronto',
          reason: 'Unauthorized pets and lease violations',
          date: 'August 2023',
          status: 'Eviction completed - damages $2,100'
        }
      ],
      rentHistory: 'Mixed - good payment record but lease compliance issues',
      landlordIntel: 'Pays rent on time but tends to violate lease terms. Had unauthorized pets.',
      riskLevel: 'Medium',
      lastUpdated: '2025-01-14'
    },
    'yusuf al-shibiby': {
      name: 'Yusuf Al-Shibiby',
      creditScore: 480,
      ltbCases: 5,
      evictionHistory: '3 evictions across different properties',
      evictionDetails: [
        {
          property: '1-Bedroom Apartment, 321 Dundas St, Toronto',
          reason: 'Non-payment of rent - $4,200 arrears',
          date: 'June 2022',
          status: 'Eviction completed'
        },
        {
          property: '2-Bedroom Apartment, 654 Yonge St, Toronto',
          reason: 'Property damage and disturbances',
          date: 'January 2024',
          status: 'Eviction completed - damages $5,800'
        },
        {
          property: 'Studio Apartment, 987 Bloor St, Toronto',
          reason: 'Non-payment and lease violations',
          date: 'November 2024',
          status: 'Eviction completed'
        }
      ],
      rentHistory: 'Very poor - chronic payment issues and property damage',
      landlordIntel: 'EXTREME CAUTION: Multiple evictions, significant property damage, disruptive behavior.',
      riskLevel: 'High',
      lastUpdated: '2025-01-05'
    },
    'dan tzotzis': {
      name: 'Dan Tzotzis',
      creditScore: 710,
      ltbCases: 1,
      evictionHistory: 'None - 1 dispute resolved amicably',
      evictionDetails: [],
      rentHistory: 'Good - 5 years, business owner',
      landlordIntel: 'Reliable tenant. Owns local business, good communicator.',
      riskLevel: 'Low',
      lastUpdated: '2025-01-13'
    },

    // Additional Low Risk Tenants
    'emma thompson': {
      name: 'Emma Thompson',
      creditScore: 780,
      ltbCases: 0,
      evictionHistory: 'None',
      evictionDetails: [],
      rentHistory: 'Outstanding - 7 years, perfect payment record',
      landlordIntel: 'Exceptional tenant. Professional, clean, and maintains property beautifully.',
      riskLevel: 'Low',
      lastUpdated: '2025-01-14'
    },
    'david chen': {
      name: 'David Chen',
      creditScore: 745,
      ltbCases: 0,
      evictionHistory: 'None',
      evictionDetails: [],
      rentHistory: 'Excellent - 4 years, reliable and punctual',
      landlordIntel: 'Great tenant. Works from home, very quiet and respectful.',
      riskLevel: 'Low',
      lastUpdated: '2025-01-16'
    },

    // Medium Risk Tenants
    'alex rodriguez': {
      name: 'Alex Rodriguez',
      creditScore: 630,
      ltbCases: 1,
      evictionHistory: 'None - case was for noise complaints, resolved',
      evictionDetails: [],
      rentHistory: 'Fair - some late payments during job transition',
      landlordIntel: 'Had issues with loud music but improved after warnings.',
      riskLevel: 'Medium',
      lastUpdated: '2025-01-09'
    },

    // High Risk Tenants with detailed eviction histories
    'jason miller': {
      name: 'Jason Miller',
      creditScore: 520,
      ltbCases: 4,
      evictionHistory: '1 eviction for non-payment (2023)',
      evictionDetails: [
        {
          property: '1-Bedroom Apartment, 147 Spadina Ave, Toronto',
          reason: 'Non-payment of rent - $2,800 arrears',
          date: 'July 2023',
          status: 'Eviction completed'
        }
      ],
      rentHistory: 'Poor - multiple arrears and damages',
      landlordIntel: 'AVOID: Consistently late, property damage, difficult to reach.',
      riskLevel: 'High',
      lastUpdated: '2025-01-06'
    },
    'maria santos': {
      name: 'Maria Santos',
      creditScore: 485,
      ltbCases: 6,
      evictionHistory: '3 evictions across different properties',
      evictionDetails: [
        {
          property: '2-Bedroom Apartment, 234 King St W, Toronto',
          reason: 'Non-payment of rent - $5,400 arrears',
          date: 'March 2022',
          status: 'Eviction completed'
        },
        {
          property: '1-Bedroom Condo, 567 Bay St, Toronto',
          reason: 'Excessive property damage and disturbances',
          date: 'November 2023',
          status: 'Eviction completed - damages $8,900'
        },
        {
          property: 'Studio Apartment, 890 Richmond St, Toronto',
          reason: 'Non-payment and lease violations',
          date: 'August 2024',
          status: 'Eviction completed'
        }
      ],
      rentHistory: 'Very poor - pattern of defaults',
      landlordIntel: 'EXTREME CAUTION: Serial problem tenant with extensive damage history.',
      riskLevel: 'High',
      lastUpdated: '2025-01-02'
    }
  };

  // Database search suggestions for partial matches
  const searchSuggestions = [
    'john smith', 'sarah johnson', 'mike wilson', 'emma thompson', 'david chen',
    'alex rodriguez', 'jason miller', 'maria santos', 'nicholas lai', 'tula nikitopoulos',
    'angelika korzeniewski', 'michael saltzman', 'yusuf al-shibiby', 'dan tzotzis'
  ];

  // Enhanced search with suggestions
  function findBestMatch(searchTerm) {
    const normalizedSearch = searchTerm.toLowerCase().trim();
    
    // Exact match first
    if (tenantDatabase[normalizedSearch]) {
      return { type: 'exact', data: tenantDatabase[normalizedSearch] };
    }
    
    // Partial matches
    const partialMatches = searchSuggestions.filter(name => 
      name.includes(normalizedSearch) || normalizedSearch.includes(name.split(' ')[0]) || normalizedSearch.includes(name.split(' ')[1])
    );
    
    if (partialMatches.length > 0) {
      return { type: 'suggestions', matches: partialMatches };
    }
    
    return { type: 'none' };
  }

  // User session management
  let currentUser = null;
  let isLoggedIn = false;

  // Mobile menu functionality
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.getElementById('mainNav');
  
  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', function() {
      mainNav.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active');
      
      const isExpanded = mainNav.classList.contains('active');
      mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
    });
    
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
    
    document.addEventListener('click', function(e) {
      if (!mobileMenuBtn.contains(e.target) && !mainNav.contains(e.target)) {
        mainNav.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Enhanced tenant search functionality with login bypass for testing
  function searchTenant() {
    const input = document.getElementById('tenantSearch');
    const searchValue = input.value.trim();
    
    if (!searchValue) {
      showNotification('Please enter a tenant name to search.', 'warning');
      input.focus();
      input.style.borderColor = '#ef4444';
      input.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
      setTimeout(() => {
        input.style.borderColor = '';
        input.style.boxShadow = '';
      }, 2000);
      return;
    }

    // Add loading state
    const searchBtn = document.getElementById('searchBtn');
    const originalText = searchBtn.textContent;
    searchBtn.textContent = 'Searching Database...';
    searchBtn.disabled = true;
    searchBtn.style.opacity = '0.7';
    
    // Simulate realistic database search delay
    setTimeout(() => {
      const searchResult = findBestMatch(searchValue);
      
      if (searchResult.type === 'exact') {
        // Found exact match - show full report
        showNotification(`Records found for ${searchResult.data.name}! Generating comprehensive report...`, 'success');
        setTimeout(() => {
          showTenantReport(searchResult.data);
        }, 800);
      } else if (searchResult.type === 'suggestions') {
        // Found partial matches - show suggestions
        showSearchSuggestions(searchValue, searchResult.matches);
      } else {
        // No matches found
        showNotFoundResult(searchValue);
      }
      
      searchBtn.textContent = originalText;
      searchBtn.disabled = false;
      searchBtn.style.opacity = '1';
    }, 1500);
  }

  // Show comprehensive tenant report modal
  function showTenantReport(tenantData) {
    const riskColors = {
      'Low': '#10b981',
      'Medium': '#f59e0b', 
      'High': '#ef4444'
    };

    const getRiskDescription = (risk) => {
      switch(risk) {
        case 'Low': return 'Excellent tenant with minimal risk factors';
        case 'Medium': return 'Good tenant with some considerations';
        case 'High': return 'High-risk tenant requiring careful evaluation';
        default: return 'Risk assessment unavailable';
      }
    };

    const getCreditRating = (score) => {
      if (score >= 750) return { rating: 'Excellent', color: '#10b981' };
      if (score >= 700) return { rating: 'Very Good', color: '#059669' };
      if (score >= 650) return { rating: 'Good', color: '#f59e0b' };
      if (score >= 600) return { rating: 'Fair', color: '#d97706' };
      return { rating: 'Poor', color: '#ef4444' };
    };

    const creditInfo = getCreditRating(tenantData.creditScore);

    const evictionDetailsHTML = tenantData.evictionDetails && tenantData.evictionDetails.length > 0 ? `
      <div class="eviction-details">
        <h5>WARNING: Detailed Eviction History:</h5>
        ${tenantData.evictionDetails.map(eviction => `
          <div class="eviction-item">
            <div class="eviction-property">${eviction.property}</div>
            <div class="eviction-reason">Reason: ${eviction.reason}</div>
            <div class="eviction-date">Date: ${eviction.date} • Status: ${eviction.status}</div>
          </div>
        `).join('')}
      </div>
    ` : '';

    const reportHTML = `
      <div class="comprehensive-tenant-report">
        <div class="report-header">
          <div class="header-content">
            <div class="tenant-basic-info">
              <h2>${tenantData.name}</h2>
              <p class="report-date">Report Generated: ${new Date().toLocaleDateString('en-CA')} • Last Updated: ${tenantData.lastUpdated}</p>
            </div>
            <div class="risk-assessment">
              <div class="risk-badge" style="background-color: ${riskColors[tenantData.riskLevel]};">
                ${tenantData.riskLevel} Risk
              </div>
              <p class="risk-description">${getRiskDescription(tenantData.riskLevel)}</p>
            </div>
          </div>
        </div>

        <div class="report-content">
          <!-- Two-column grid layout for main sections -->
          <div class="report-sections-grid">
            <!-- Credit Information Section -->
            <div class="report-section">
              <div class="section-header">
                <h3>Credit Information</h3>
                <span class="data-source">Source: Equifax Canada</span>
              </div>
              <div class="credit-details">
                <div class="credit-score-display">
                  <div class="score-circle">
                    <span class="score-number">${tenantData.creditScore}</span>
                    <span class="score-max">/900</span>
                  </div>
                  <div class="score-info">
                    <div class="credit-rating" style="color: ${creditInfo.color};">
                      ${creditInfo.rating}
                    </div>
                    <div class="score-percentile">
                      ${tenantData.creditScore >= 700 ? 'Above Average' : tenantData.creditScore >= 600 ? 'Average' : 'Below Average'}
                    </div>
                  </div>
                </div>
                <div class="credit-insights">
                  <div class="insight-item">
                    <span class="insight-label">Payment History:</span>
                    <span class="insight-value">${tenantData.creditScore >= 700 ? 'Excellent' : tenantData.creditScore >= 600 ? 'Good' : 'Concerning'}</span>
                  </div>
                  <div class="insight-item">
                    <span class="insight-label">Credit Utilization:</span>
                    <span class="insight-value">${tenantData.creditScore >= 700 ? 'Low' : tenantData.creditScore >= 600 ? 'Moderate' : 'High'}</span>
                  </div>
                  <div class="insight-item">
                    <span class="insight-label">Credit Age:</span>
                    <span class="insight-value">${tenantData.creditScore >= 700 ? 'Established' : 'Building'}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Legal History Section -->
            <div class="report-section">
              <div class="section-header">
                <h3>Legal History</h3>
                <span class="data-source">Source: Landlord Tenant Board of Ontario</span>
              </div>
              <div class="legal-details">
                <div class="legal-stats">
                  <div class="stat-card">
                    <div class="stat-number">${tenantData.ltbCases}</div>
                    <div class="stat-label">LTB Cases</div>
                  </div>
                  <div class="stat-card">
                    <div class="stat-number">${tenantData.evictionDetails ? tenantData.evictionDetails.length : (tenantData.evictionHistory === 'None' ? '0' : '1+')}</div>
                    <div class="stat-label">Evictions</div>
                  </div>
                  <div class="stat-card">
                    <div class="stat-number">${tenantData.ltbCases > 0 && (!tenantData.evictionDetails || tenantData.evictionDetails.length === 0) ? '1+' : '0'}</div>
                    <div class="stat-label">Settled</div>
                  </div>
                </div>
                <div class="legal-summary">
                  <h4>Eviction History:</h4>
                  <p>${tenantData.evictionHistory}</p>
                  ${evictionDetailsHTML}
                  ${tenantData.ltbCases > 0 ? `
                  <div class="case-details">
                    <h4>Case Summary:</h4>
                    <p>This tenant has been involved in ${tenantData.ltbCases} case(s) with the Landlord Tenant Board. 
                    ${tenantData.riskLevel === 'High' ? 'Multiple cases indicate ongoing rental issues and pattern of problematic behavior.' : 
                      tenantData.riskLevel === 'Medium' ? 'Cases were resolved, showing some willingness to work through disputes.' : 
                      'No significant concerns from LTB records.'}</p>
                  </div>
                  ` : ''}
                </div>
              </div>
            </div>

            <!-- Rental History Section -->
            <div class="report-section">
              <div class="section-header">
                <h3>Rental History</h3>
                <span class="data-source">Source: Property Management Partners Network</span>
              </div>
              <div class="rental-details">
                <div class="rental-timeline">
                  <h4>Payment Performance:</h4>
                  <p>${tenantData.rentHistory}</p>
                </div>
                <div class="rental-metrics">
                  <div class="metric-item">
                    <span class="metric-label">On-Time Payments:</span>
                    <span class="metric-value ${tenantData.riskLevel === 'Low' ? 'excellent' : tenantData.riskLevel === 'Medium' ? 'good' : 'poor'}">
                      ${tenantData.riskLevel === 'Low' ? '95-100%' : tenantData.riskLevel === 'Medium' ? '80-94%' : 'Below 80%'}
                    </span>
                  </div>
                  <div class="metric-item">
                    <span class="metric-label">Property Care:</span>
                    <span class="metric-value ${tenantData.riskLevel === 'Low' ? 'excellent' : tenantData.riskLevel === 'Medium' ? 'good' : 'poor'}">
                      ${tenantData.riskLevel === 'Low' ? 'Excellent' : tenantData.riskLevel === 'Medium' ? 'Good' : 'Concerning'}
                    </span>
                  </div>
                  <div class="metric-item">
                    <span class="metric-label">Lease Compliance:</span>
                    <span class="metric-value ${tenantData.riskLevel === 'Low' ? 'excellent' : tenantData.riskLevel === 'Medium' ? 'good' : 'poor'}">
                      ${tenantData.riskLevel === 'Low' ? 'Full Compliance' : tenantData.riskLevel === 'Medium' ? 'Minor Issues' : 'Multiple Violations'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Private Intelligence Section -->
            <div class="report-section">
              <div class="section-header">
                <h3>Private Landlord Intelligence</h3>
                <span class="data-source">Source: TenantBase Verified Network</span>
              </div>
              <div class="intel-details">
                <div class="intel-summary">
                  <p>${tenantData.landlordIntel}</p>
                </div>
                <div class="intel-insights">
                  <h4>Key Insights:</h4>
                  <ul>
                    ${tenantData.riskLevel === 'Low' ? `
                      <li>Consistently positive feedback from previous landlords</li>
                      <li>Responsive to communication and maintenance requests</li>
                      <li>Left previous properties in excellent condition</li>
                      <li>No neighbor complaints or disturbances reported</li>
                    ` : tenantData.riskLevel === 'Medium' ? `
                      <li>Mixed feedback with some concerns addressed</li>
                      <li>Generally responsive but occasional communication delays</li>
                      <li>Minor issues resolved through landlord intervention</li>
                      <li>Shows improvement over time</li>
                    ` : `
                      <li>Multiple negative reports from previous landlords</li>
                      <li>Poor communication and unresponsive behavior</li>
                      <li>Property damage and maintenance neglect reported</li>
                      <li>Neighbor complaints and disturbances documented</li>
                    `}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Recommendations Section - Full Width -->
          <div class="report-section full-width">
            <div class="section-header">
              <h3>TenantBase Recommendations</h3>
              <span class="data-source">Based on comprehensive data analysis</span>
            </div>
            <div class="recommendations-content">
              ${tenantData.riskLevel === 'Low' ? `
                <div class="recommendation approved">
                  <h4>RECOMMENDED FOR RENTAL</h4>
                  <ul>
                    <li>Excellent tenant with minimal risk factors</li>
                    <li>Strong credit history and payment reliability</li>
                    <li>Positive landlord references and clean legal record</li>
                    <li>Consider standard security deposit and lease terms</li>
                  </ul>
                </div>
              ` : tenantData.riskLevel === 'Medium' ? `
                <div class="recommendation conditional">
                  <h4>CONDITIONAL APPROVAL RECOMMENDED</h4>
                  <ul>
                    <li>Good tenant with some areas of concern</li>
                    <li>Consider additional security deposit or guarantor</li>
                    <li>Verify current employment and income stability</li>
                    <li>Clear communication of lease expectations recommended</li>
                    <li>Consider shorter initial lease term with renewal option</li>
                  </ul>
                </div>
              ` : `
                <div class="recommendation declined">
                  <h4>HIGH RISK - CAREFUL CONSIDERATION REQUIRED</h4>
                  <ul>
                    <li>Multiple risk factors present in tenant history</li>
                    <li>Consider requiring co-signer or additional security</li>
                    <li>Verify all income sources and employment</li>
                    <li>Consider alternative applicants if available</li>
                    <li>If proceeding, implement strict lease monitoring</li>
                    ${tenantData.evictionDetails && tenantData.evictionDetails.length > 0 ? '<li>Multiple evictions indicate serious rental risk</li>' : ''}
                  </ul>
                </div>
              `}
            </div>
          </div>
        </div>

        <div class="report-footer">
          <div class="footer-info">
            <p><strong>Disclaimer:</strong> This report is based on available data from verified sources. TenantBase recommends using this information as part of a comprehensive screening process including reference checks and income verification.</p>
            <p><strong>Data Privacy:</strong> All information is collected and processed in accordance with PIPEDA and Ontario privacy legislation.</p>
          </div>
          <div class="footer-actions">
            <button class="report-action-btn secondary" onclick="printReport()">Print Report</button>
            <button class="report-action-btn secondary" onclick="exportReport('${tenantData.name}')">Email Report</button>
            <button class="report-action-btn primary" onclick="closeModal(document.getElementById('reportModal'))">Close Report</button>
          </div>
        </div>
      </div>
    `;

    // Create and show report modal
    let reportModal = document.getElementById('reportModal');
    if (!reportModal) {
      reportModal = document.createElement('div');
      reportModal.id = 'reportModal';
      reportModal.className = 'modal';
      reportModal.setAttribute('role', 'dialog');
      reportModal.setAttribute('aria-hidden', 'true');
      document.body.appendChild(reportModal);
    }

    reportModal.innerHTML = `
      <div class="modal-content comprehensive-report-modal">
        <span class="close" onclick="closeModal(document.getElementById('reportModal'))">&times;</span>
        ${reportHTML}
      </div>
    `;

    openModal(reportModal);
  }

  // Show search suggestions for partial matches
  function showSearchSuggestions(originalSearch, suggestions) {
    const suggestionsHTML = `
      <div class="search-suggestions-report">
        <div class="report-header">
          <h2>Search Suggestions</h2>
          <div class="risk-badge" style="background-color: #f59e0b;">
            Similar Names
          </div>
        </div>
        
        <div class="tenant-info">
          <h3>Search: "${originalSearch}"</h3>
          <p class="search-date">Found ${suggestions.length} similar name(s) in our database</p>
        </div>
        
        <div class="suggestions-list">
          <h4>Did you mean one of these?</h4>
          ${suggestions.map(name => `
            <div class="suggestion-item" onclick="document.getElementById('tenantSearch').value = '${name}'; searchTenant(); closeModal(document.getElementById('suggestionsModal'));">
              <span class="suggestion-name">${name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</span>
              <span class="suggestion-arrow">→</span>
            </div>
          `).join('')}
        </div>
        
        <div class="suggestions-footer">
          <p>Click on a name above to search for that tenant, or try a different search term.</p>
        </div>
      </div>
    `;

    let suggestionsModal = document.getElementById('suggestionsModal');
    if (!suggestionsModal) {
      suggestionsModal = document.createElement('div');
      suggestionsModal.id = 'suggestionsModal';
      suggestionsModal.className = 'modal';
      suggestionsModal.setAttribute('role', 'dialog');
      suggestionsModal.setAttribute('aria-hidden', 'true');
      document.body.appendChild(suggestionsModal);
    }

    suggestionsModal.innerHTML = `
      <div class="modal-content">
        <span class="close" onclick="closeModal(document.getElementById('suggestionsModal'))">&times;</span>
        ${suggestionsHTML}
      </div>
    `;

    openModal(suggestionsModal);
  }

  // Show not found result
  function showNotFoundResult(searchValue) {
    const notFoundHTML = `
      <div class="not-found-report">
        <div class="report-header">
          <h2>No Records Found</h2>
          <div class="risk-badge" style="background-color: #6b7280;">
            No Match
          </div>
        </div>
        
        <div class="tenant-info">
          <h3>Search: "${searchValue}"</h3>
          <p class="search-date">No records found in our database</p>
        </div>
        
        <div class="not-found-content">
          <div class="not-found-icon">Search</div>
          <h4>Tenant Not Found</h4>
          <p>We couldn't find any records for "${searchValue}" in our database. This could mean:</p>
          <ul>
            <li>The tenant name might be spelled differently</li>
            <li>This tenant may not have any rental history in Ontario</li>
            <li>The tenant might be a first-time renter</li>
            <li>Records may not yet be updated in our system</li>
          </ul>
          
          <div class="recommendations">
            <h4>Next Steps:</h4>
            <ul>
              <li>Try searching with different spellings or variations</li>
              <li>Consider conducting traditional reference checks</li>
              <li>Request additional documentation from the applicant</li>
              <li>Contact TenantBase support for manual search assistance</li>
            </ul>
          </div>
        </div>
      </div>
    `;

    let notFoundModal = document.getElementById('notFoundModal');
    if (!notFoundModal) {
      notFoundModal = document.createElement('div');
      notFoundModal.id = 'notFoundModal';
      notFoundModal.className = 'modal';
      notFoundModal.setAttribute('role', 'dialog');
      notFoundModal.setAttribute('aria-hidden', 'true');
      document.body.appendChild(notFoundModal);
    }

    notFoundModal.innerHTML = `
      <div class="modal-content">
        <span class="close" onclick="closeModal(document.getElementById('notFoundModal'))">&times;</span>
        ${notFoundHTML}
      </div>
    `;

    openModal(notFoundModal);
  }

  // Notification system
  function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <span class="notification-icon">${type === 'warning' ? 'Warning' : type === 'success' ? 'Success' : 'Info'}</span>
        <span class="notification-message">${message}</span>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 5000);
  }

   // Modal management functions
  function openModal(modal) {
    // Force modal to be positioned at top of viewport
    modal.style.display = 'flex';
    modal.style.alignItems = 'flex-start';
    modal.style.justifyContent = 'center';
    modal.style.paddingTop = '2vh';
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    // Scroll everything to top immediately - multiple approaches for reliability
    setTimeout(() => {
      modal.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo(0, 0);
      
      // Also scroll the modal content itself to top
      const modalContent = modal.querySelector('.modal-content');
      if (modalContent) {
        modalContent.scrollTop = 0;
      }
      
      // Force any scrollable containers within the modal to top
      const scrollableElements = modal.querySelectorAll('[style*="overflow"], .comprehensive-tenant-report');
      scrollableElements.forEach(el => {
        el.scrollTop = 0;
      });
    }, 50);
    
    // Additional scroll reset after animation
    setTimeout(() => {
      modal.scrollTop = 0;
      const modalContent = modal.querySelector('.modal-content');
      if (modalContent) {
        modalContent.scrollTop = 0;
      }
    }, 350);
    
    // Focus management for accessibility
    const firstFocusable = modal.querySelector('button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (firstFocusable) {
      setTimeout(() => firstFocusable.focus(), 100);
    }
  }

  function closeModal(modal) {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Sample report function
  function showSampleReport() {
    const sampleTenant = tenantDatabase['john smith'];
    showTenantReport(sampleTenant);
  }

  // Report action functions
  window.printReport = function() {
    window.print();
  };

  window.exportReport = function(tenantName) {
    showNotification(`Report for ${tenantName} would be emailed to your registered address.`, 'info');
  };

  window.closeModal = closeModal;

  // Login and signup functionality
  function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    if (!email || !password) {
      showNotification('Please fill in all fields.', 'warning');
      return;
    }
    
    // Simulate login process
    showNotification('Logging you in...', 'info');
    
    setTimeout(() => {
      currentUser = { email: email, name: email.split('@')[0] };
      isLoggedIn = true;
      closeModal(document.getElementById('loginModal'));
      showNotification(`Welcome back, ${currentUser.name}!`, 'success');
      updateUIForLoggedInUser();
    }, 1500);
  }

  function handleSignup(event) {
    event.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;
    
    if (!name || !email || !password || !confirmPassword) {
      showNotification('Please fill in all fields.', 'warning');
      return;
    }
    
    if (password !== confirmPassword) {
      showNotification('Passwords do not match.', 'warning');
      return;
    }
    
    if (password.length < 6) {
      showNotification('Password must be at least 6 characters long.', 'warning');
      return;
    }
    
    // Simulate signup process
    showNotification('Creating your account...', 'info');
    
    setTimeout(() => {
      currentUser = { email: email, name: name };
      isLoggedIn = true;
      closeModal(document.getElementById('signupModal'));
      showNotification(`Welcome to TenantBase, ${name}!`, 'success');
      updateUIForLoggedInUser();
    }, 1500);
  }

  function updateUIForLoggedInUser() {
    // Update navigation to show logged in state
    const loginLink = document.querySelector('nav a[href="#login"]');
    const signupLink = document.querySelector('nav a[href="#signup"]');
    
    if (loginLink && signupLink) {
      loginLink.textContent = `Hi, ${currentUser.name}`;
      loginLink.href = '#profile';
      signupLink.textContent = 'Logout';
      signupLink.href = '#logout';
      signupLink.onclick = handleLogout;
    }
  }

  function handleLogout() {
    currentUser = null;
    isLoggedIn = false;
    showNotification('You have been logged out.', 'info');
    
    // Reset navigation
    const loginLink = document.querySelector('nav a[href="#profile"]');
    const signupLink = document.querySelector('nav a[href="#logout"]');
    
    if (loginLink && signupLink) {
      loginLink.textContent = 'Login';
      loginLink.href = '#login';
      signupLink.textContent = 'Sign Up';
      signupLink.href = '#signup';
      signupLink.onclick = null;
    }
  }

  // Event listeners setup
  function setupEventListeners() {
    // Logo click functionality - scroll to top
    const logoContainer = document.getElementById('logoContainer');
    if (logoContainer) {
      logoContainer.addEventListener('click', function() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }

    // Search functionality
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('tenantSearch');
    const sampleReportBtn = document.getElementById('sampleReportBtn');
    
    if (searchBtn) {
      searchBtn.addEventListener('click', searchTenant);
    }
    
    if (searchInput) {
      searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
          searchTenant();
        }
      });
    }
    
    if (sampleReportBtn) {
      sampleReportBtn.addEventListener('click', showSampleReport);
    }

    // Navigation links
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href === '#login') {
          e.preventDefault();
          openModal(document.getElementById('loginModal'));
        } else if (href === '#signup') {
          e.preventDefault();
          openModal(document.getElementById('signupModal'));
        }
      });
    });

    // Modal functionality
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const switchToSignup = document.getElementById('switchToSignup');
    const switchToLogin = document.getElementById('switchToLogin');

    if (loginForm) {
      loginForm.addEventListener('submit', handleLogin);
    }
    
    if (signupForm) {
      signupForm.addEventListener('submit', handleSignup);
    }
    
    if (switchToSignup) {
      switchToSignup.addEventListener('click', function(e) {
        e.preventDefault();
        closeModal(loginModal);
        openModal(signupModal);
      });
    }
    
    if (switchToLogin) {
      switchToLogin.addEventListener('click', function(e) {
        e.preventDefault();
        closeModal(signupModal);
        openModal(loginModal);
      });
    }

    // Close modal functionality
    document.querySelectorAll('.close').forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal');
        if (modalId) {
          closeModal(document.getElementById(modalId));
        } else {
          // Find parent modal
          const modal = this.closest('.modal');
          if (modal) {
            closeModal(modal);
          }
        }
      });
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
      if (e.target.classList.contains('modal')) {
        closeModal(e.target);
      }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip modal links and logout
        if (href === '#login' || href === '#signup' || href === '#logout' || href === '#profile') {
          return;
        }
        
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // Initialize intersection observer for animations
  function initializeAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe elements that should animate
    document.querySelectorAll('.section h2, .step').forEach(el => {
      observer.observe(el);
    });
  }

  // Scroll effect for header
  function initializeScrollEffects() {
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      
      lastScrollTop = scrollTop;
    });
  }

  // Initialize everything
  setupEventListeners();
  initializeAnimations();
  initializeScrollEffects();
  
  // Add some demo functionality
  console.log('TenantBase initialized successfully!');
  console.log('Try searching for: john smith, mike wilson, sarah johnson, or any other name');
});