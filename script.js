// Sample data for charts (replace with actual data from your CSV/model)
const annualLossData = {
    labels: Array.from({length: 23}, (_, i) => 2001 + i),
    data: [172.8, 146.1, 131.5, 204.4, 172.3, 189.5, 210.3, 225.1, 198.7, 203.1, 215.6, 241.2, 228.9, 391.4, 298.7, 312.4, 289.1, 301.5, 278.9, 295.3, 267.8, 254.1, 241.5]
};

const gdiCategories = ['Low Deficit', 'Moderate Deficit', 'High Deficit', 'Very High Deficit'];
const gdiDistributionData = [1420, 1890, 1560, 746];

const topRegions = ['Uttar Pradesh', 'Madhya Pradesh', 'Bihar', 'Maharashtra', 'Rajasthan', 'Gujarat', 'Karnataka', 'Andhra Pradesh', 'Tamil Nadu', 'West Bengal'];
const regionalLossData = [4500, 3800, 3200, 2900, 2600, 2400, 2200, 2000, 1800, 1600];

// Initialize charts
let annualLossChart, gdiDistributionChart, regionalLossChart, modelPerformanceChart;
let extentComparisonChart, gainLossChart, correlationChart, predictedActualChart;

// Chart.js configuration
const chartConfig = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            labels: {
                color: '#A5D6A7'
            }
        },
        tooltip: {
            backgroundColor: 'rgba(11, 32, 18, 0.9)',
            titleColor: '#00E676',
            bodyColor: '#C8E6C9',
            borderColor: '#2C5234',
            borderWidth: 1
        }
    },
    scales: {
        x: {
            ticks: { color: '#81C784' },
            grid: { color: '#1D3B2A' }
        },
        y: {
            ticks: { color: '#81C784' },
            grid: { color: '#1D3B2A' }
        }
    }
};

// Initialize Annual Loss Chart
function initAnnualLossChart() {
    const ctx = document.getElementById('annualLossChart');
    if (!ctx) return;

    annualLossChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: annualLossData.labels,
            datasets: [{
                label: 'Tree Cover Loss (ha)',
                data: annualLossData.data,
                borderColor: '#00E676',
                backgroundColor: 'rgba(0, 230, 118, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4,
                pointRadius: 4,
                pointHoverRadius: 6,
                pointBackgroundColor: '#4CAF50',
                pointBorderColor: '#00E676'
            }]
        },
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: false
                }
            }
        }
    });
}

// Initialize GDI Distribution Chart
function initGdiDistributionChart() {
    const ctx = document.getElementById('gdiDistributionChart');
    if (!ctx) return;

    gdiDistributionChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: gdiCategories,
            datasets: [{
                data: gdiDistributionData,
                backgroundColor: [
                    'rgba(76, 175, 80, 0.8)',
                    'rgba(129, 199, 132, 0.8)',
                    'rgba(255, 193, 7, 0.8)',
                    'rgba(244, 67, 54, 0.8)'
                ],
                borderColor: [
                    '#4CAF50',
                    '#81C784',
                    '#FFC107',
                    '#F44336'
                ],
                borderWidth: 2
            }]
        },
        options: chartConfig
    });
}

// Initialize Regional Loss Chart
function initRegionalLossChart() {
    const ctx = document.getElementById('regionalLossChart');
    if (!ctx) return;

    regionalLossChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: topRegions,
            datasets: [{
                label: 'Total Loss (ha)',
                data: regionalLossData,
                backgroundColor: 'rgba(76, 175, 80, 0.7)',
                borderColor: '#4CAF50',
                borderWidth: 1
            }]
        },
        options: {
            ...chartConfig,
            indexAxis: 'y',
            plugins: {
                ...chartConfig.plugins,
                legend: {
                    display: false
                }
            }
        }
    });
}

// Initialize Model Performance Chart
function initModelPerformanceChart() {
    const ctx = document.getElementById('modelPerformanceChart');
    if (!ctx) return;

    modelPerformanceChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Linear Regression', 'Decision Tree'],
            datasets: [
                {
                    label: 'R² Score',
                    data: [1.0000, 0.9996],
                    backgroundColor: 'rgba(0, 230, 118, 0.7)',
                    borderColor: '#00E676',
                    borderWidth: 1
                },
                {
                    label: 'CV Mean R²',
                    data: [1.0000, 0.9923],
                    backgroundColor: 'rgba(76, 175, 80, 0.7)',
                    borderColor: '#4CAF50',
                    borderWidth: 1
                }
            ]
        },
        options: chartConfig
    });
}

// Initialize Extent Comparison Chart
function initExtentComparisonChart() {
    const ctx = document.getElementById('extentComparisonChart');
    if (!ctx) return;

    // Generate sample scatter data
    const scatterData = Array.from({length: 100}, () => ({
        x: Math.random() * 1000000,
        y: Math.random() * 950000
    }));

    extentComparisonChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Regions',
                data: scatterData,
                backgroundColor: 'rgba(0, 230, 118, 0.5)',
                borderColor: '#00E676',
                pointRadius: 4
            }]
        },
        options: {
            ...chartConfig,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Tree Cover Extent (2000) [ha]',
                        color: '#A5D6A7'
                    },
                    ticks: { color: '#81C784' },
                    grid: { color: '#1D3B2A' }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Tree Cover Extent (2010) [ha]',
                        color: '#A5D6A7'
                    },
                    ticks: { color: '#81C784' },
                    grid: { color: '#1D3B2A' }
                }
            }
        }
    });
}

// Initialize Gain vs Loss Chart
function initGainLossChart() {
    const ctx = document.getElementById('gainLossChart');
    if (!ctx) return;

    // Generate sample data
    const scatterData = Array.from({length: 100}, () => ({
        x: Math.random() * 50000,
        y: Math.random() * 40000
    }));

    gainLossChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Regions',
                data: scatterData,
                backgroundColor: 'rgba(76, 175, 80, 0.5)',
                borderColor: '#4CAF50',
                pointRadius: 4
            }]
        },
        options: {
            ...chartConfig,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Tree Cover Gain (2000–2020) [ha]',
                        color: '#A5D6A7'
                    },
                    ticks: { color: '#81C784' },
                    grid: { color: '#1D3B2A' }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Total Tree Cover Loss (2001–2023) [ha]',
                        color: '#A5D6A7'
                    },
                    ticks: { color: '#81C784' },
                    grid: { color: '#1D3B2A' }
                }
            }
        }
    });
}

// Initialize Correlation Chart (simplified as heatmap is complex)
function initCorrelationChart() {
    const ctx = document.getElementById('correlationChart');
    if (!ctx) return;

    // Simplified correlation visualization
    const correlationData = [
        { feature: 'Extent 2000', correlation: 0.998 },
        { feature: 'Extent 2010', correlation: 0.997 },
        { feature: 'Total Loss', correlation: 0.856 },
        { feature: 'Gain 2000-2020', correlation: 0.659 },
        { feature: 'Area', correlation: 0.456 }
    ];

    correlationChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: correlationData.map(d => d.feature),
            datasets: [{
                label: 'Correlation with GDI',
                data: correlationData.map(d => d.correlation),
                backgroundColor: correlationData.map(d => 
                    d.correlation > 0.8 ? 'rgba(0, 230, 118, 0.7)' :
                    d.correlation > 0.5 ? 'rgba(76, 175, 80, 0.7)' :
                    'rgba(129, 199, 132, 0.7)'
                ),
                borderColor: '#4CAF50',
                borderWidth: 1
            }]
        },
        options: {
            ...chartConfig,
            scales: {
                ...chartConfig.scales,
                y: {
                    ...chartConfig.scales.y,
                    max: 1.0,
                    min: 0
                }
            }
        }
    });
}

// Initialize Predicted vs Actual Chart
function initPredictedActualChart() {
    const ctx = document.getElementById('predictedActualChart');
    if (!ctx) return;

    // Generate sample data
    const scatterData = Array.from({length: 200}, () => {
        const actual = Math.random() * 100;
        return {
            x: actual,
            y: actual + (Math.random() - 0.5) * 2 // Small random variation
        };
    });

    predictedActualChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [
                {
                    label: 'Predictions',
                    data: scatterData,
                    backgroundColor: 'rgba(0, 230, 118, 0.5)',
                    borderColor: '#00E676',
                    pointRadius: 3
                },
                {
                    label: 'Perfect Prediction Line',
                    data: [{x: 0, y: 0}, {x: 100, y: 100}],
                    type: 'line',
                    borderColor: '#F44336',
                    borderWidth: 2,
                    pointRadius: 0,
                    fill: false
                }
            ]
        },
        options: {
            ...chartConfig,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Actual GDI',
                        color: '#A5D6A7'
                    },
                    ticks: { color: '#81C784' },
                    grid: { color: '#1D3B2A' }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Predicted GDI',
                        color: '#A5D6A7'
                    },
                    ticks: { color: '#81C784' },
                    grid: { color: '#1D3B2A' }
                }
            }
        }
    });
}

// Prediction Form Handler
document.getElementById('predictionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Calculate GDI (simplified calculation - replace with actual model prediction)
    // This is a placeholder - you would call your actual ML model here
    const extent_2000 = parseFloat(data.extent_2000_ha);
    const extent_2010 = parseFloat(data.extent_2010_ha);
    const total_loss = parseFloat(data.total_loss);
    const gain = parseFloat(data.gain_2000_2020_ha);
    
    // Simplified GDI calculation (replace with actual model)
    const loss_ratio = total_loss / (extent_2000 + 1);
    const gain_ratio = gain / (extent_2000 + 1);
    const gdi = (loss_ratio - gain_ratio) * 100;
    
    // Determine category
    let category = 'Low';
    let categoryClass = 'low';
    if (gdi > 50) {
        category = 'Very High';
        categoryClass = 'high';
    } else if (gdi > 25) {
        category = 'High';
        categoryClass = 'high';
    } else if (gdi > 10) {
        category = 'Moderate';
        categoryClass = 'medium';
    }
    
    // Display results
    displayPredictionResults(gdi, category, categoryClass, data);
});

function displayPredictionResults(gdi, category, categoryClass, inputData) {
    const resultsDiv = document.getElementById('predictionResults');
    
    resultsDiv.innerHTML = `
        <div class="result-card">
            <h4 style="color: #A5D6A7; margin-bottom: 1rem;">Prediction Results</h4>
            <div style="margin-bottom: 1rem;">
                <label style="color: #81C784; font-size: 0.9rem;">Predicted GDI:</label>
                <div class="result-value">${gdi.toFixed(2)}</div>
            </div>
            <div style="margin-bottom: 1rem;">
                <label style="color: #81C784; font-size: 0.9rem;">GDI Category:</label>
                <div class="result-category ${categoryClass}">${category} Deficit</div>
            </div>
            <div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid #2C5234;">
                <h5 style="color: #A5D6A7; margin-bottom: 0.5rem;">Input Summary</h5>
                <div style="font-size: 0.85rem; color: #81C784; line-height: 1.8;">
                    <div><strong>Region:</strong> ${inputData.subnational1 || 'N/A'}</div>
                    <div><strong>Area:</strong> ${parseFloat(inputData.area_ha).toLocaleString()} ha</div>
                    <div><strong>Extent 2000:</strong> ${parseFloat(inputData.extent_2000_ha).toLocaleString()} ha</div>
                    <div><strong>Extent 2010:</strong> ${parseFloat(inputData.extent_2010_ha).toLocaleString()} ha</div>
                    <div><strong>Total Loss:</strong> ${parseFloat(inputData.total_loss).toLocaleString()} ha</div>
                    <div><strong>Gain:</strong> ${parseFloat(inputData.gain_2000_2020_ha).toLocaleString()} ha</div>
                </div>
            </div>
        </div>
    `;
}

// Chart view toggle
document.querySelectorAll('.chart-controls .btn-icon').forEach(btn => {
    btn.addEventListener('click', function() {
        const view = this.dataset.view;
        const parent = this.closest('.chart-controls');
        parent.querySelectorAll('.btn-icon').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // Toggle chart type if needed
        if (view === 'bar' && annualLossChart) {
            annualLossChart.config.type = 'bar';
        } else if (view === 'line' && annualLossChart) {
            annualLossChart.config.type = 'line';
        }
        annualLossChart.update();
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// Initialize all charts when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initAnnualLossChart();
    initGdiDistributionChart();
    initRegionalLossChart();
    initModelPerformanceChart();
    initExtentComparisonChart();
    initGainLossChart();
    initCorrelationChart();
    initPredictedActualChart();
});

// Update active nav link on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
