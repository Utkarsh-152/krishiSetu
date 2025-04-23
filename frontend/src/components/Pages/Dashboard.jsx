import React from 'react'
import { useState } from "react"
import { motion } from "framer-motion"
import {
  Calendar,
  CloudRain,
  CloudSun,
  Droplets,
  Home,
  Info,
  Leaf,
  MapPin,
  Menu,
  MoreHorizontal,
  PieChart,
  ShoppingCart,
  SproutIcon as Seedling,
  Sun,
  Thermometer,
  Wind,
  X,
} from "lucide-react"
import { Link } from 'react-router-dom'
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Progress } from "../ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Badge } from "../ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"

import {
  Chart,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendItem,
} from "../ui/chart"
import { Line, Pie } from "recharts"
export default function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Mock data for the dashboard
  const userData = {
    name: "Rajesh Kumar",
    location: "Amritsar, Punjab",
    avatar: "/placeholder.svg?height=40&width=40",
    landSize: "5.2 hectares",
    landType: "Irrigated",
    soilType: "Alluvial",
    lastSoilTest: "15 March 2025",
  }

  const weatherData = {
    current: {
      temp: 28,
      condition: "Partly Cloudy",
      humidity: 65,
      windSpeed: 12,
      precipitation: 20,
    },
    forecast: [
      { day: "Today", temp: 28, icon: "cloud-sun" },
      { day: "Tomorrow", temp: 30, icon: "sun" },
      { day: "Wed", temp: 29, icon: "sun" },
      { day: "Thu", temp: 27, icon: "cloud-rain" },
      { day: "Fri", temp: 26, icon: "cloud-rain" },
    ],
  }

  const financialData = {
    currentMonth: {
      income: 45000,
      expenses: 18000,
      profit: 27000,
    },
    expenseBreakdown: [
      { name: "Seeds", value: 4000 },
      { name: "Fertilizers", value: 6000 },
      { name: "Labor", value: 5000 },
      { name: "Equipment", value: 2000 },
      { name: "Others", value: 1000 },
    ],
    monthlyData: [
      { name: "Jan", income: 30000, expenses: 15000 },
      { name: "Feb", income: 35000, expenses: 16000 },
      { name: "Mar", income: 32000, expenses: 14000 },
      { name: "Apr", income: 40000, expenses: 18000 },
      { name: "May", income: 45000, expenses: 18000 },
      { name: "Jun", income: 0, expenses: 0 },
    ],
  }

  const upcomingTasks = [
    {
      task: "Apply fertilizer to wheat field",
      date: "April 25, 2025",
      priority: "High",
    },
    {
      task: "Irrigation schedule for eastern plot",
      date: "April 27, 2025",
      priority: "Medium",
    },
    {
      task: "Book soil testing appointment",
      date: "May 5, 2025",
      priority: "Medium",
    },
    {
      task: "Harvest preparation",
      date: "May 15, 2025",
      priority: "High",
    },
  ]

  const marketPrices = [
    { crop: "Wheat", price: 2200, trend: "up", change: "+3.5%" },
    { crop: "Rice", price: 3800, trend: "down", change: "-1.2%" },
    { crop: "Maize", price: 1850, trend: "up", change: "+2.1%" },
    { crop: "Soybean", price: 4200, trend: "up", change: "+4.7%" },
  ]

  const renderWeatherIcon = (icon) => {
    switch (icon) {
      case "sun":
        return <Sun className="h-6 w-6 text-amber-500" />
      case "cloud-sun":
        return <CloudSun className="h-6 w-6 text-amber-400" />
      case "cloud-rain":
        return <CloudRain className="h-6 w-6 text-blue-500" />
      default:
        return <CloudSun className="h-6 w-6 text-amber-400" />
    }
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-emerald-800 to-emerald-800">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm px-8">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Seedling className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold text-green-800">KrishiSetu</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium text-green-900 hover:text-green-700">
              <Home className="h-4 w-4 inline mr-1" />
              Home
            </Link>
            <Link
              to="/dashboard"
              className="text-sm font-medium text-green-700 border-b-2 border-green-700 hover:text-green-700"
            >
              <PieChart className="h-4 w-4 inline mr-1" />
              Dashboard
            </Link>
            <Link to="/online-mandi" className="text-sm font-medium text-green-900 hover:text-green-700">
              <ShoppingCart className="h-4 w-4 inline mr-1" />
              Online Mandi
            </Link>
            <Link to="/soil-testing" className="text-sm font-medium text-green-900 hover:text-green-700">
              <Droplets className="h-4 w-4 inline mr-1" />
              Soil Testing
            </Link>
            <Link to="/irrigation-calendar" className="text-sm font-medium text-green-900 hover:text-green-700">
              <Calendar className="h-4 w-4 inline mr-1" />
              Irrigation Calendar
            </Link>
            <Link to="/about-us" className="text-sm font-medium text-green-900 hover:text-green-700">
              <Info className="h-4 w-4 inline mr-1" />
              About Us
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={userData.avatar || "/placeholder.svg"} alt={userData.name} />
                    <AvatarFallback>RK</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{userData.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">{userData.location}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Help</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden border-t p-4 bg-white">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-sm font-medium text-green-900 hover:text-green-700">
                <Home className="h-4 w-4 inline mr-2" />
                Home
              </Link>
              <Link href="/dashboard" className="text-sm font-medium text-green-700 hover:text-green-700">
                <PieChart className="h-4 w-4 inline mr-2" />
                Dashboard
              </Link>
              <Link href="/online-mandi" className="text-sm font-medium text-green-900 hover:text-green-700">
                <ShoppingCart className="h-4 w-4 inline mr-2" />
                Online Mandi
              </Link>
              <Link href="/soil-testing" className="text-sm font-medium text-green-900 hover:text-green-700">
                <Droplets className="h-4 w-4 inline mr-2" />
                Soil Testing
              </Link>
              <Link href="/irrigation-calendar" className="text-sm font-medium text-green-900 hover:text-green-700">
                <Calendar className="h-4 w-4 inline mr-2" />
                Irrigation Calendar
              </Link>
              <Link href="/about-us" className="text-sm font-medium text-green-900 hover:text-green-700">
                <Info className="h-4 w-4 inline mr-2" />
                About Us
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="container p-6">
      {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">Farm Dashboard</h1>
              <p className="text-white">Welcome back, {userData.name}! Here's your farm overview.</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center">
              <MapPin className="h-5 w-5 text-white" />
              <span className="text-green-800">{userData.location}</span>
              <Badge variant="outline" className="ml-2 bg-white text-emerald-800 hover:bg-emerald-400">
                Last updated: Today, 10:30 AM
              </Badge>
            </div>
        </div>
        {/* Dashboard Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Weather Card */}
          <motion.div variants={item} className="md:col-span-1">
            <Card className="h-full border-green-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-emerald-800 flex items-center justify-between">
                  <span>Today's Weather</span>
                  <CloudSun className="h-5 w-5 text-amber-500" />
                </CardTitle>
                <CardDescription>{userData.location}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <div className="text-4xl font-bold text-emerald-900">{weatherData.current.temp}°C</div>
                    <div className="ml-4 text-green-700">{weatherData.current.condition}</div>
                  </div>
                  <CloudSun className="h-12 w-12 text-amber-500" />
                </div>
                <div className="grid grid-cols-3 gap-2 mb-6">
                  <div className="flex flex-col items-center p-2 bg-emerald-800 rounded-lg">
                    <Droplets className="h-5 w-5 text-blue-500 mb-1" />
                    <div className="text-xs text-white">Humidity</div>
                    <div className="font-medium text-white">{weatherData.current.humidity}%</div>
                  </div>
                  <div className="flex flex-col items-center p-2 bg-emerald-800 rounded-lg">
                    <Wind className="h-5 w-5 text-blue-500 mb-1" />
                    <div className="text-xs text-white">Wind</div>
                    <div className="font-medium text-white">{weatherData.current.windSpeed} km/h</div>
                  </div>
                  <div className="flex flex-col items-center p-2 bg-emerald-800 rounded-lg">
                    <CloudRain className="h-5 w-5 text-blue-500 mb-1" />
                    <div className="text-xs text-white">Rain</div>
                    <div className="font-medium text-white">{weatherData.current.precipitation}%</div>
                  </div>
                </div>
                <div className="border-t border-green-100 pt-4">
                  <div className="text-sm font-medium text-emerald-800 mb-2">5-Day Forecast</div>
                  <div className="flex justify-between">
                    {weatherData.forecast.map((day, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className="text-xs text-emerald-700">{day.day}</div>
                        {renderWeatherIcon(day.icon)}
                        <div className="text-sm font-medium text-emerald-900">{day.temp}°</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Land Details Card */}
          <motion.div variants={item} className="md:col-span-2">
            <Card className="h-full border-green-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-emerald-800 flex text-lg items-center justify-between">
                  <span>Land Details</span>
                  <MapPin className="h-5 w-5 text-green-700" />
                </CardTitle>
                <CardDescription>Your farm information and current status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <div className="text-sm text-emerald-800">Land Size</div>
                        <div className="text-lg font-medium text-emerald-900">{userData.landSize}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm text-emerald-800">Land Type</div>
                        <div className="text-lg font-medium text-emerald-900">{userData.landType}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm text-emerald-800">Soil Type</div>
                        <div className="text-lg font-medium text-emerald-900">{userData.soilType}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm text-emerald-800">Last Soil Test</div>
                        <div className="text-lg font-medium text-emerald-900">{userData.lastSoilTest}</div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <div className="text-lg font-medium text-green-800 mb-2">Current Crops</div>
                      <div className="flex flex-wrap gap-2 text-md">
                        <Badge className="bg-amber-800 text-white hover:bg-amber-200">Wheat</Badge>
                        <Badge className="bg-green-800 text-white hover:bg-green-200">Mustard</Badge>
                        <Badge className="bg-blue-800 text-white hover:bg-blue-200">Vegetables</Badge>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="aspect-video relative rounded-lg overflow-hidden border border-green-200">
                      <img src="https://imgs.search.brave.com/-CrokhLw_SDIihVLf3tVGrjlIyxBDFZwAw0p6k8Q0j0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saDMu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tLzk5/Vk1UWFlRM1RtUGMw/QmNReW1xdXVvY2s4/T0JWR3U0QVF1Yndr/UnJSclJ6OEtsVmxR/X0Q5Yk1GSUFCUmtt/bmFDRGVxMFBaUzAz/VjJCeHdsbTVvaTJk/c2JwOThLdjdTRngx/Z3hmZz1lMzY1LXBh/LW51LXMw" alt="Farm Map" fill className="object-cover" />
                      <div className="absolute bottom-2 right-2 bg-white/80 backdrop-blur-sm rounded px-2 py-1 text-xs text-green-900">
                        Tap to view detailed map
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Financial Overview */}
          <motion.div variants={item} className="md:col-span-2">
            <Card className="h-full border-green-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-green-800 flex items-center justify-between">
                  <span>Financial Overview</span>
                  <PieChart className="h-5 w-5 text-green-700" />
                </CardTitle>
                <CardDescription>Current month income, expenses and profit</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-emerald-800 p-4 rounded-lg">
                    <div className="text-sm text-white mb-1">Income</div>
                    <div className="text-2xl font-bold text-white">
                      ₹{financialData.currentMonth.income.toLocaleString()}
                    </div>
                  </div>
                  <div className="bg-red-900 p-4 rounded-lg">
                    <div className="text-sm text-white mb-1">Expenses</div>
                    <div className="text-2xl font-bold text-white">
                      ₹{financialData.currentMonth.expenses.toLocaleString()}
                    </div>
                  </div>
                  <div className="bg-blue-900 p-4 rounded-lg">
                    <div className="text-sm text-white mb-1">Profit</div>
                    <div className="text-2xl font-bold text-white">
                      ₹{financialData.currentMonth.profit.toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-sm font-medium text-black mb-2">Monthly Trend</div>
                  <div className="h-64">
                    <ChartContainer className="h-full" data={financialData.monthlyData}>
                      <Chart>
                        <Line
                          type="monotone"
                          dataKey="income"
                          stroke="#16a34a"
                          strokeWidth={2}
                          dot={{ r: 4 }}
                          activeDot={{ r: 6 }}
                        />
                        <Line
                          type="monotone"
                          dataKey="expenses"
                          stroke="#dc2626"
                          strokeWidth={2}
                          dot={{ r: 4 }}
                          activeDot={{ r: 6 }}
                        />
                        <ChartTooltip
                          content={
                            <ChartTooltipContent
                              className="border-green-100"
                              items={[
                                { name: "Income", value: (value) => `₹${value}`, color: "#16a34a" },
                                { name: "Expenses", value: (value) => `₹${value}`, color: "#dc2626" },
                              ]}
                            />
                          }
                        />
                      </Chart>
                      <ChartLegend className="mt-4 justify-center">
                        <ChartLegendItem name="Income" color="#16a34a" />
                        <ChartLegendItem name="Expenses" color="#dc2626" />
                      </ChartLegend>
                    </ChartContainer>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Expense Breakdown */}
          <motion.div variants={item} className="md:col-span-1">
            <Card className="h-full border-green-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-green-800">Expense Breakdown</CardTitle>
                <CardDescription>Current month expenses by category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 mb-4">
                  <ChartContainer className="h-full" data={financialData.expenseBreakdown}>
                    <Chart>
                      <Pie
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#16a34a"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      />
                      <ChartTooltip
                        content={
                          <ChartTooltipContent
                            className="border-green-100"
                            items={[{ name: "Amount", value: (value) => `₹${value}` }]}
                          />
                        }
                      />
                    </Chart>
                  </ChartContainer>
                </div>
                <div className="space-y-2">
                  {financialData.expenseBreakdown.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div className="text-sm text-green-800">{item.name}</div>
                      <div className="text-sm font-medium text-green-900">₹{item.value.toLocaleString()}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Upcoming Tasks */}
          <motion.div variants={item} className="md:col-span-1">
            <Card className="h-full border-green-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-green-800 flex items-center justify-between">
                  <span>Upcoming Tasks</span>
                  <Calendar className="h-5 w-5 text-green-700" />
                </CardTitle>
                <CardDescription>Your farming schedule</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingTasks.map((task, index) => (
                    <div key={index} className="flex items-start gap-3 p-2 rounded-lg hover:bg-green-50">
                      <div
                        className={`w-2 h-2 rounded-full mt-2 ${
                          task.priority === "High" ? "bg-red-500" : "bg-amber-500"
                        }`}
                      />
                      <div className="flex-1">
                        <div className="font-medium text-green-900">{task.task}</div>
                        <div className="text-xs text-green-700 mt-1">{task.date}</div>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full bg-emerald-800 text-white hover:bg-emerald-50">
                  View Calendar
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Market Prices */}
          <motion.div variants={item} className="md:col-span-1">
            <Card className="h-full border-emerald-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-green-800 flex items-center justify-between">
                  <span>Market Prices</span>
                  <ShoppingCart className="h-5 w-5 text-green-700" />
                </CardTitle>
                <CardDescription>Current crop prices in your region</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {marketPrices.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-green-50">
                      <div className="font-medium text-green-900">{item.crop}</div>
                      <div className="flex items-center">
                        <div className="text-green-900 font-medium mr-2">₹{item.price}/q</div>
                        <div className={`text-xs ${item.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                          {item.change}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-emerald-800 hover:bg-emerald-50"><Link to="/online-mandi">Visit Online Mandi</Link></Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Weather Advisory */}
          <motion.div variants={item} className="md:col-span-1">
            <Card className="h-full border-green-100">
              <CardHeader className="pb-2  rounded-t-lg">
                <CardTitle className="text-amber-800 flex items-center justify-between">
                  <span>Weather Advisory</span>
                  <CloudSun className="h-5 w-5 text-amber-600" />
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                      <Thermometer className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <div className="font-medium text-green-900">Temperature Alert</div>
                      <div className="text-sm text-green-700">
                        Temperatures expected to rise to 32°C by weekend. Consider additional irrigation for wheat
                        fields.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <CloudRain className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium text-green-900">Rain Forecast</div>
                      <div className="text-sm text-green-700">
                        Light showers expected on Thursday and Friday. Plan harvesting activities accordingly.
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full bg-amber-900 text-white hover:bg-amber-50">
                  View Detailed Forecast
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>
      </main>
    </div>
  </>
)
}
