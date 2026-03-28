import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, Edit3, GraduationCap, BarChart3, User, Bell, ChevronRight, Droplets, Frown, Utensils, Accessibility, Smartphone, Zap, CircleDashed, AlertCircle, Lightbulb, Wind, CheckCircle, History, Info, Shield, LogOut, Search, Play, ArrowLeft, Timer } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { cn } from './lib/utils';

// --- Components ---

const BottomNav = () => {
  const location = useLocation();
  const navItems = [
    { path: '/', icon: Home, label: '首页' },
    { path: '/record', icon: Edit3, label: '记录' },
    { path: '/academy', icon: GraduationCap, label: '学院' },
    { path: '/report', icon: BarChart3, label: '报告' },
    { path: '/profile', icon: User, label: '我的' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-end px-4 pb-6 pt-2 bg-white/70 backdrop-blur-xl rounded-t-[3rem] shadow-[0_-8px_24px_rgba(57,104,70,0.08)]">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex flex-col items-center justify-center transition-all duration-300 ease-out active:scale-90",
              isActive 
                ? "bg-primary-container text-primary rounded-full h-14 w-14 mb-2 shadow-lg" 
                : "text-slate-400 p-2 hover:text-primary"
            )}
          >
            <item.icon size={isActive ? 24 : 20} strokeWidth={isActive ? 2.5 : 2} />
            <span className="font-headline font-bold text-[10px] mt-0.5">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

// --- Pages ---

const HomePage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pb-32 pt-4 px-6 max-w-2xl mx-auto space-y-8"
    >
      <header className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-primary-container flex items-center justify-center">
            <img 
              alt="User" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4-ZEexP2lonn7zngnYFhXorr8nVkmvnw4u_CcLIQJw8BIZ3VXCB8ZMCGfJHgSR6yAhrowP55yNim05w0wAuNq9wJJZ_swGew0ueKOcRYG8vRCxgIGFhzg7Zof5oLdqlGJeG5S2cQ1rYej8u03gtuYqqdJON-grMtWFOFtovSdLykS2nq8FAm49VU9-rQCFsM9ywZBFUtfXDeb4jWxEXfGhGudGDk_aOL725xsigCoIzQxl7O38r4xh45kF7WH6qJR4a2f2YAI7_N0"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-on-surface-variant font-medium">早安，拉拉队员</span>
            <h1 className="font-headline font-black text-2xl tracking-tight text-primary">今天拉了吗</h1>
          </div>
        </div>
        <button className="text-slate-400 hover:opacity-80 transition-opacity active:scale-95 duration-200">
          <Bell size={24} />
        </button>
      </header>

      <section className="relative">
        <div className="bg-surface-container-lowest rounded-xl p-8 shadow-[0_24px_48px_-12px_rgba(57,104,70,0.08)] overflow-hidden">
          <div className="absolute top-0 right-0 -mr-4 -mt-4 opacity-10">
            <Droplets size={120} className="text-primary" />
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-24 h-24 bg-surface-container-low rounded-full flex items-center justify-center">
              <Frown size={48} className="text-primary" />
            </div>
            <div>
              <h2 className="font-headline font-black text-3xl mb-1">今天还没拉？</h2>
              <p className="text-on-surface-variant text-sm tracking-wide">累计 0 次 · 上次是 昨天 08:30</p>
            </div>
            <div className="flex items-center gap-2 pt-4 w-full justify-center">
              <div className="flex gap-1.5">
                {[1, 2, 3, 4].map(i => <div key={i} className="w-8 h-2 rounded-full bg-primary" />)}
                <div className="w-8 h-2 rounded-full bg-primary-container" />
                {[1, 2].map(i => <div key={i} className="w-8 h-2 rounded-full bg-surface-container-high" />)}
              </div>
              <span className="text-[10px] font-bold text-primary ml-2 uppercase">4天连胜</span>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4">
        <Link to="/timer" className="h-16 w-full rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold text-lg shadow-[0_8px_24px_rgba(57,104,70,0.2)] active:scale-95 transition-transform flex items-center justify-center">
          现在去拉
        </Link>
        <Link to="/record" className="h-16 w-full rounded-full bg-surface-container-lowest border border-outline-variant/30 text-on-surface font-bold text-lg active:scale-95 transition-transform flex items-center justify-center">
          刚拉完，记一下
        </Link>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-headline font-black text-xl">今日建议</h3>
          <span className="text-primary text-sm font-bold">查看全部</span>
        </div>
        <div className="flex overflow-x-auto gap-4 hide-scrollbar -mx-6 px-6">
          <div className="min-w-[280px] bg-secondary-container p-6 rounded-lg flex flex-col justify-between h-40">
            <div className="bg-white/40 w-10 h-10 rounded-full flex items-center justify-center">
              <Utensils size={20} className="text-secondary" />
            </div>
            <p className="font-bold text-on-secondary-container leading-tight">早餐后是排便的黄金时间，记得尝试一下哦。</p>
          </div>
          <div className="min-w-[280px] bg-primary-container p-6 rounded-lg flex flex-col justify-between h-40">
            <div className="bg-white/40 w-10 h-10 rounded-full flex items-center justify-center">
              <Accessibility size={20} className="text-primary" />
            </div>
            <p className="font-bold text-on-primary-container leading-tight">试试配合小板凳，身体前倾，姿势更顺畅。</p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-headline font-black text-xl">生活追踪</h3>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-surface-container-lowest p-4 rounded-lg flex flex-col items-center justify-center text-center aspect-square shadow-sm">
            <Droplets size={24} className="text-primary mb-2" />
            <span className="text-xs font-bold block">喝水</span>
            <span className="text-[10px] text-on-surface-variant">1200ml</span>
          </div>
          <div className="bg-surface-container-lowest p-4 rounded-lg flex flex-col items-center justify-center text-center aspect-square shadow-sm">
            <Play size={24} className="text-secondary mb-2" />
            <span className="text-xs font-bold block">运动</span>
            <span className="text-[10px] text-on-surface-variant">30min</span>
          </div>
          <div className="bg-surface-container-lowest p-4 rounded-lg flex flex-col items-center justify-center text-center aspect-square shadow-sm border-2 border-dashed border-outline-variant/50">
            <Zap size={24} className="text-tertiary mb-2" />
            <span className="text-xs font-bold block">今日尝试</span>
            <span className="text-[10px] text-on-surface-variant">火龙果</span>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-headline font-black text-xl">拉拉学院</h3>
          <ChevronRight className="text-on-surface-variant" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { title: "别坐太久！久坐的危害", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuApjmvtoIYK6OuNipc0lg_EeqLVNKw9L63VayyVULQ1dxjLaqfYjv8ZgUlHWNc9PEeXIXt_BbtiNT9d7xhU6ov6YFvqPqDRCQsmkdFwwDet9d2TOTw7_GoYu6kSjCr_NXB1AwonmQI2EEJei9A-sT8eDCFN0Pcmzt8vWukP4J9u6mBE18mdEMV-ukSw99t7g_cT5u1DEOSMfYtsr7glqCs0fwigN1CB5QYDCHdRfv7ZCxnTkT8z7ioiPd9Y4gT5TapGutBFILjH2-Ac" },
            { title: "拒绝用力：轻松排便法", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlvr_EAwNN0MQMr_U2xul_m-XJ6TV3bFItu4MQAR2HLPdLQQiFEtGnBatSquKmvuaXITtjLmCpb4woDJ0mD6YAg3fMKp4wBigC_JERc4oHVy-patWvNYi0KviC-6O5x0lrIAELlDWra8Xikvra7JTDdcXPu41jFd45ma8MmySeCRYdhJpezg-LvizW_1h46bKYDAUZYwb69xMSfKqNaXsjxPB8zvp4Q-QSmhwM2UWxHFQIziQKEnVGChExaqKJNXrVJPLTosAsYqy_" },
            { title: "到底什么是正常的？", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDz52lWtI6hEYn5NOWxKNKcyqhXgio4J2XZxDtcTeewaXn_5ECvfYPEikPp5XQ_BtV5omPYPUgJVb5GcuUsLu415wGoNBOC-jkJdwg_iSxTfX62-FzrLKUcbWOQ1J-ttRoui-Z1tmYmjpivsyYIBjfZytCOipPZnjgJzapCtX7JmIpyahY5ekgTrq5Y8nzs1G7qSToKP_Z6La6vL_LFPJz_gmQti-l8B1TRMlkBY3jNP6CfaGPq8EYpsEZ37n9qxqHeMigI47JNiX7_" },
            { title: "正确姿势图解手册", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHVnnBCax2c_FvX_pVR1sMiJl7m-wFx7fCmwBgsGEyfK0a1lOd7Gukw-u0Alef_ueXcQBLF05NEcR8eRkPWv9R2QllHI3x_p2gIUSlNI7fbu7D5PvEF8E39TkZ284JbF0m0NvfE3hcFERDzf3XzKV46ZpoMC4OInjgbqmNm7hRPT0WvWkJPlQlIlWnA3tqXkXjMTPqbcvZofvULxYMiVOT2HtZMUYLTF5eatGG1p-A0ulPD4RlQJvgSOP5oGWJQk2KiJXYuEoLJKkg" }
          ].map((item, idx) => (
            <div key={idx} className="bg-surface-container-low rounded-lg p-4 flex flex-col gap-3">
              <div className="w-full aspect-[4/3] rounded-md overflow-hidden bg-slate-200">
                <img alt={item.title} className="w-full h-full object-cover" src={item.img} referrerPolicy="no-referrer" />
              </div>
              <span className="text-sm font-bold leading-tight">{item.title}</span>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

const RecordPage = () => {
  const [smoothness, setSmoothness] = useState(1);
  const [shape, setShape] = useState(2);
  const [color, setColor] = useState(0);

  const navigate = useNavigate();

  const handleSave = () => {
    // In a real app, we would save the state here
    navigate('/');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-md mx-auto px-6 pt-4 pb-40 space-y-10"
    >
      <header className="flex items-center justify-between w-full mb-6">
        <Link to="/" className="text-slate-400 hover:opacity-80 transition-opacity active:scale-95">
          <ArrowLeft size={28} />
        </Link>
        <h1 className="font-headline font-black text-2xl tracking-tight text-primary">记一下</h1>
        <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container">
          <img alt="User" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV_a0Tm913BkD_eHf_FpG5MI-88e66nbsRp-_Ft1sV2azen1WnDKDSOVrdaAut-HqAySO1k_F203fF95eVJGDxhzldJbi4Ou596qfqXjayR9GxvAanr7Ts46V-NV45WIkkWbmbNyMcd4sr6tJI3LUdR19_7R4plK7z_1hMUMr20wNvtvwEDiFbPjBEYCHWxD0no2BGukBxkrihq-hIeXJM67vaxTEOEmwGEhhkjqv9sLYuWjxUKFOgGn2EE1IJwtmldzhrE_FSz1ye" referrerPolicy="no-referrer" />
        </div>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-bold px-2">本次顺利吗</h2>
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: CheckCircle, label: '非常顺畅', color: 'text-primary' },
            { icon: CircleDashed, label: '一般般', color: 'text-primary' },
            { icon: Frown, label: '有点费劲', color: 'text-tertiary' }
          ].map((item, idx) => (
            <button 
              key={idx}
              onClick={() => setSmoothness(idx)}
              className={cn(
                "flex flex-col items-center gap-3 p-5 rounded-xl transition-all active:scale-95",
                smoothness === idx ? "bg-primary text-on-primary shadow-lg" : "bg-surface-container-lowest shadow-sm"
              )}
            >
              <item.icon size={36} className={smoothness === idx ? "text-on-primary" : item.color} />
              <span className="text-sm font-bold">{item.label}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between px-2">
          <h2 className="text-xl font-bold">本次形状</h2>
          <span className="text-xs text-outline font-medium">布里斯托分类</span>
        </div>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 px-2">
          {[
            { icon: Zap, label: '硬球状' },
            { icon: History, label: '香肠状(硬)' },
            { icon: Zap, label: '香蕉状', active: true },
            { icon: Droplets, label: '松软块状' },
            { icon: Droplets, label: '水样/泥状' }
          ].map((item, idx) => (
            <button 
              key={idx}
              onClick={() => setShape(idx)}
              className="flex-shrink-0 flex flex-col items-center gap-3 w-20"
            >
              <div className={cn(
                "w-16 h-16 rounded-2xl flex items-center justify-center transition-all active:scale-90",
                shape === idx ? "bg-primary-container w-20 h-20 -mt-2 shadow-lg" : "bg-surface-container-high"
              )}>
                <item.icon size={shape === idx ? 36 : 24} className={shape === idx ? "text-primary" : "text-on-surface-variant"} />
              </div>
              <span className={cn("text-[11px] font-bold text-center", shape === idx && "text-primary")}>{item.label}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold px-2">本次颜色</h2>
        <div className="flex justify-between items-center px-2">
          {[
            { color: '#E6B441', label: '金黄' },
            { color: '#8B5E3C', label: '褐色' },
            { color: '#4A3728', label: '偏深' },
            { color: '#D7C0AE', label: '偏浅' },
            { icon: Zap, label: '其他' }
          ].map((item, idx) => (
            <button 
              key={idx}
              onClick={() => setColor(idx)}
              className="flex flex-col items-center gap-2 group"
            >
              <div 
                className={cn(
                  "w-12 h-12 rounded-full transition-all active:scale-90 flex items-center justify-center",
                  color === idx && "ring-offset-4 ring-2 ring-primary"
                )}
                style={{ backgroundColor: item.color || 'transparent' }}
              >
                {item.icon && <item.icon size={20} className="text-outline" />}
              </div>
              <span className={cn("text-xs font-bold", color === idx ? "text-primary" : "text-outline")}>{item.label}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="bg-surface-container-low rounded-[2rem] p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap size={20} className="text-secondary" />
            <h2 className="text-lg font-bold">进阶信息</h2>
          </div>
          <ChevronRight className="text-outline rotate-90" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: '玩手机了?', icon: Smartphone, color: 'text-primary' },
            { label: '憋得慌?', icon: Zap, color: 'text-tertiary' },
            { label: '没拉干净?', icon: CircleDashed, color: 'text-secondary' },
            { label: '有痛感?', icon: AlertCircle, color: 'text-tertiary' }
          ].map((item, idx) => (
            <button key={idx} className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-2xl active:scale-95 transition-transform">
              <span className="text-sm font-bold">{item.label}</span>
              <item.icon size={20} className={item.color} />
            </button>
          ))}
        </div>
        
        <div className="pt-4 space-y-4">
          <h3 className="text-sm font-bold text-on-surface-variant px-1">推荐姿势</h3>
          <div className="grid grid-cols-4 gap-3">
            {[
              { label: '坐姿', icon: Accessibility },
              { label: '蹲姿', icon: Accessibility },
              { label: '前倾', icon: Accessibility, active: true },
              { label: '脚垫', icon: Accessibility }
            ].map((item, idx) => (
              <button key={idx} className={cn(
                "flex flex-col items-center gap-2 p-3 rounded-xl transition-all",
                item.active ? "bg-primary text-on-primary shadow-md" : "bg-surface-container-lowest"
              )}>
                <item.icon size={24} />
                <span className="text-[10px] font-bold">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <footer className="fixed bottom-0 left-0 w-full z-50 px-6 pb-10 pt-6 bg-white/70 backdrop-blur-xl rounded-t-[3rem] shadow-[0_-8px_24px_rgba(57,104,70,0.08)]">
        <div className="max-w-md mx-auto flex flex-col items-center gap-4">
          <button 
            onClick={handleSave}
            className="w-full h-16 rounded-full bg-gradient-to-br from-primary to-primary-container text-white font-headline font-black text-lg shadow-[0_8px_24px_rgba(57,104,70,0.2)] active:scale-95 transition-transform"
          >
            保存记录
          </button>
          <button 
            onClick={handleSave}
            className="text-primary font-bold text-sm tracking-wide opacity-60 hover:opacity-100 transition-opacity"
          >
            仅保存核心数据
          </button>
        </div>
      </footer>
    </motion.div>
  );
};

const TimerPage = () => {
  const [seconds, setSeconds] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col min-h-screen bg-surface"
    >
      <header className="flex items-center justify-between px-6 py-4 w-full bg-surface-container-low sticky top-0 z-50">
        <button onClick={() => navigate('/')} className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-lowest active:scale-95 transition-transform">
          <ArrowLeft size={20} className="text-primary" />
        </button>
        <h1 className="font-headline font-black text-2xl tracking-tight text-primary">正在努力中</h1>
        <div className="w-10"></div>
      </header>

      <main className="flex-1 px-6 pt-8 pb-32 max-w-md mx-auto w-full space-y-10 overflow-y-auto">
        <section className="text-center space-y-2">
          <div className="inline-block px-4 py-1 rounded-full bg-primary-container/20 text-primary font-bold text-sm mb-4">
            计时进行中
          </div>
          <h2 className="font-headline font-black text-7xl tracking-tighter text-primary drop-shadow-sm">
            {formatTime(seconds)}
          </h2>
          <p className="text-on-surface-variant font-medium tracking-wide">持续时间</p>
        </section>

        <div className="bg-surface-container-low rounded-xl p-6 flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center flex-shrink-0">
            <Lightbulb size={24} className="text-primary" />
          </div>
          <div>
            <h3 className="font-bold text-primary mb-0.5">温馨提醒</h3>
            <p className="text-on-surface font-medium">先放松，别急着用力</p>
          </div>
        </div>

        <section className="relative aspect-square flex items-center justify-center">
          <div className="absolute inset-0 bg-primary/5 rounded-full scale-90"></div>
          <div className="relative w-full h-full p-8">
            <img 
              alt="Guide" 
              className="w-full h-full object-cover rounded-xl opacity-80 mix-blend-multiply" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm_ccY0gQtn8jKr2F_3KYSlf0i4GpnNWJe9ziDXCCkKgWrHGyvZX1sAr7swOF8JHYQH1R3Rn-CezJ1CBDVHlwL4K-Sh2fbmw7JH4DPySMrSM3HZCAsw7HsY8BO49ZpvnlUSSR1wQRgslYNQMHAD-Lk4YaDgBRDlcqzMfW-ClPYnlJfNdSm869P6G8CYXFhpsD-V5D06SfIGaoLYO9Libm12FCqF8JO0buSFKlXXw1RsCilYVYushim947ln_ZV9klffhChTNVlarKV"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center pointer-events-none">
              <div className="bg-white/90 backdrop-blur-md p-4 rounded-lg shadow-sm">
                <Accessibility size={48} className="text-primary mb-2 mx-auto" />
                <p className="text-xs font-bold text-primary">推荐姿势：身体前倾，脚踏矮凳</p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-wrap justify-center gap-3">
          {[
            { icon: Smartphone, label: '不看手机' },
            { icon: Wind, label: '放松呼吸' },
            { icon: AlertCircle, label: '不猛用力' }
          ].map((item, idx) => (
            <div key={idx} className="px-5 py-3 rounded-full bg-surface-container-highest flex items-center space-x-2">
              <item.icon size={20} className="text-secondary" />
              <span className="text-sm font-bold text-on-surface-variant">{item.label}</span>
            </div>
          ))}
        </section>
      </main>

      <footer className="fixed bottom-0 left-0 w-full p-6 bg-white/70 backdrop-blur-xl space-y-4">
        <div className="flex flex-col gap-4 max-w-md mx-auto">
          <button 
            onClick={() => navigate('/record')}
            className="h-16 w-full rounded-full bg-gradient-to-br from-primary to-primary-container text-white font-headline font-bold text-lg shadow-[0_8px_24px_rgba(57,104,70,0.2)] flex items-center justify-center space-x-2 active:scale-[0.98] transition-all"
          >
            <CheckCircle size={24} />
            <span>完成了</span>
          </button>
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => navigate('/record')}
              className="h-14 rounded-full bg-surface-container-high text-on-surface-variant font-bold text-sm flex items-center justify-center active:scale-95 transition-all"
            >
              还没拉出来
            </button>
            <button 
              onClick={() => navigate('/')}
              className="h-14 rounded-full text-tertiary font-bold text-sm flex items-center justify-center active:scale-95 transition-all"
            >
              结束本次
            </button>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

const AcademyPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-32"
    >
      <header className="bg-surface-container-low sticky top-0 z-50 w-full flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center overflow-hidden">
            <img alt="User" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwLFFuNmLDaMra2COIh1KbddRNVLFNx7NNSG3ymudxyjDuyj5sTwGIhycnNhZpcPyKT3khvMDCLONET6xk_0QhR9mfJBEby9rOv5SvlJu6pQ1Gbz1SckTwE4bw9r20C5bpzrQc3A9lc58-vqVQK4DH6IWK_YJXI8lm4vQ8A3wMlk0smFXkf1zwzDQVqKqtOJq2cREZaIgpRcGS0zB6XvCRRLFPDn5x8jlvL_5fx2tLaLY6YsDH65Gb5h6ImZ7jwin8yTnEsDuoM99R" referrerPolicy="no-referrer" />
          </div>
          <h1 className="font-headline font-black text-2xl tracking-tight text-primary italic">拉了学院</h1>
        </div>
        <button className="w-10 h-10 flex items-center justify-center text-primary active:scale-95 transition-transform">
          <Search size={24} />
        </button>
      </header>

      <main>
        <section className="mt-6">
          <div className="px-6 mb-4 flex justify-between items-end">
            <h2 className="font-headline font-extrabold text-2xl text-on-surface">今日推荐</h2>
            <span className="text-primary font-bold text-sm">查看全部</span>
          </div>
          <div className="flex overflow-x-auto px-6 gap-4 no-scrollbar">
            {[
              { title: "肠道微生态：你的第二大脑", tag: "深度解析", color: "bg-primary-container", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_bYv1xtTrHwyIDaBolHHmDVxLPKiE7uAQMZNhV2E9b2G1LHKpEMTMBBgEvUZ-MJGRbv48AfjniS05LA60SxSBS6UPkr5OW_x-nUb55XU16VyGUt4juf4N7Oe4epKNVxJRA8HyFvpN5RU_jzYt2gy_99dptTsyd9BGWJzpOskLXZOMUVAUL7WkXlthT6PAYIvnGPsx5nOeAkupIw37qRPVfXauOjLE6CA_8RITqSXwDe4xFOHOL9P3YdtUH-4ztGubm31A7HgngU4q" },
              { title: "如何通过饮食改变“质地”", tag: "饮食建议", color: "bg-secondary-container", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxFtRrWeBbhRqyib-k_EZ8XeWbZKzU3OyWKchqGHcVYsv44jfwQxj76xQZX_NU7RqqKLMoi0IRRfhp1gZyX2fIullKofTs2WyVAQhUMvRCHYxr6m-MjWRQjcksD_Gia2MsQSZfKkM8Sb7JYzhELKvK2FJhV7TxS00WSOOA-pLPt8A6_MX8m3MhoCzA3NQmoiqVUvooWSPoM4AJ4FrpDSblQm2fWnmLJJAy1XumVd2YnDJcqkqJqY06S7NDifwfrF0NDlkjG2_gZy_O" }
            ].map((item, idx) => (
              <div key={idx} className={cn("flex-shrink-0 w-[85%] aspect-[16/10] rounded-xl relative overflow-hidden", item.color)}>
                <img className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-40" src={item.img} referrerPolicy="no-referrer" />
                <div className="relative h-full p-6 flex flex-col justify-end">
                  <span className="bg-white/90 text-primary px-3 py-1 rounded-full text-xs font-bold w-fit mb-2">{item.tag}</span>
                  <h3 className="font-headline font-black text-2xl text-on-primary-container leading-tight">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 px-6">
          <h2 className="font-headline font-extrabold text-2xl text-on-surface mb-6">常见错误</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: '时间太长', icon: History },
              { label: '用力过猛', icon: Zap },
              { label: '擦拭方向', icon: History },
              { label: '便后洗手', icon: Droplets }
            ].map((item, idx) => (
              <div key={idx} className="bg-surface-container-low p-5 rounded-xl flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-primary">
                  <item.icon size={28} />
                </div>
                <span className="font-bold text-on-surface leading-tight">{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 px-6">
          <h2 className="font-headline font-extrabold text-2xl text-on-surface mb-6">什么样算正常</h2>
          <div className="flex flex-col gap-4">
            {[
              { title: '看颜色', desc: '从金黄到深褐的秘密', icon: Zap, color: 'bg-tertiary-container text-on-tertiary-container' },
              { title: '看形状', desc: '布里斯托分类法详解', icon: Zap, color: 'bg-primary-container text-primary' },
              { title: '看频率', desc: '每天三次到三天一次？', icon: History, color: 'bg-secondary-container text-secondary' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-4 rounded-full flex items-center gap-4 shadow-sm">
                <div className={cn("w-12 h-12 rounded-full flex items-center justify-center", item.color)}>
                  <item.icon size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-bold">{item.title}</p>
                  <p className="text-xs text-on-surface-variant">{item.desc}</p>
                </div>
                <ChevronRight className="text-outline-variant pr-2" />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 px-6">
          <h2 className="font-headline font-extrabold text-2xl text-on-surface mb-6">拉得更顺</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-primary text-white p-8 rounded-xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-headline font-bold text-xl mb-2">马桶正确姿势</h3>
                <p className="text-primary-fixed opacity-90 text-sm max-w-[60%]">抬高双腿，让直肠耻骨肌完全放松的科学角度。</p>
              </div>
              <Accessibility size={120} className="absolute -bottom-4 -right-4 opacity-20 rotate-12" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface-container-high p-6 rounded-xl flex flex-col justify-between aspect-square">
                <History size={36} className="text-secondary" />
                <h3 className="font-bold leading-tight">最容易成功的时机</h3>
              </div>
              <div className="bg-surface-container-high p-6 rounded-xl flex flex-col justify-between aspect-square">
                <Droplets size={36} className="text-primary" />
                <h3 className="font-bold leading-tight">饮食喝水与运动</h3>
              </div>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
};

const ReportPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="px-6 py-6 space-y-10 pb-32"
    >
      <section>
        <h2 className="text-4xl font-black text-on-surface tracking-tight mb-2">报告</h2>
        <p className="text-on-surface-variant font-medium">查看你的肠道健康趋势与深度见解</p>
      </section>

      <section className="bg-surface-container-lowest rounded-xl p-8 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <BarChart3 size={120} />
        </div>
        <div className="relative z-10">
          <h3 className="text-on-surface-variant font-bold mb-6 flex items-center gap-2">
            <Zap size={20} className="text-primary" />
            本周总览
          </h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-1">
              <span className="text-sm text-on-surface-variant block">排便次数</span>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-primary tracking-tighter">8</span>
                <span className="text-sm font-bold text-on-surface-variant">次</span>
              </div>
              <span className="text-[10px] bg-primary-container/30 text-primary px-2 py-0.5 rounded-full font-bold">处于正常范围</span>
            </div>
            <div className="space-y-1">
              <span className="text-sm text-on-surface-variant block">平均时长</span>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-secondary tracking-tighter">6.5</span>
                <span className="text-sm font-bold text-on-surface-variant">分钟</span>
              </div>
              <span className="text-[10px] bg-secondary-container/30 text-secondary px-2 py-0.5 rounded-full font-bold">比上周快 12%</span>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h3 className="text-2xl font-black tracking-tight px-1">关键洞察</h3>
        <div className="grid grid-cols-1 gap-4">
          {[
            { title: "早晨是你的黄金时间", desc: "75% 的记录发生在 7:00 - 9:00 之间，且顺利度最高。建议保持此晨间律动。", icon: Wind, color: "bg-primary" },
            { title: "手机使用延长了时长", desc: "当标记“使用手机”时，平均时长增加了 4.5 分钟。尝试放下设备以提高效率。", icon: Smartphone, color: "bg-tertiary" },
            { title: "咖啡因的正向驱动", desc: "摄入咖啡后 30 分钟内的排便记录通常伴随更高的“顺利度”评分。", icon: Utensils, color: "bg-secondary" }
          ].map((item, idx) => (
            <div key={idx} className="bg-surface-container-low p-6 rounded-lg flex items-start gap-4">
              <div className={cn("w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-on-primary", item.color)}>
                <item.icon size={24} />
              </div>
              <div>
                <h4 className="font-bold text-on-surface mb-1">{item.title}</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h3 className="text-2xl font-black tracking-tight px-1">趋势分析</h3>
        <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
          <div className="flex items-end justify-between h-48 gap-2 px-2">
            {[
              { day: '周一', val: 40, active: false },
              { day: '周二', val: 60, active: false },
              { day: '周三', val: 30, active: false },
              { day: '周四', val: 80, active: true },
              { day: '周五', val: 50, active: false },
              { day: '周六', val: 70, active: false },
              { day: '周日', val: 45, active: false },
            ].map((item, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-3">
                <div className="w-full relative group">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${item.val}%` }}
                    transition={{ delay: idx * 0.1, duration: 0.8, ease: "easeOut" }}
                    className={cn(
                      "w-full rounded-t-lg transition-all duration-300",
                      item.active ? "bg-primary shadow-[0_0_12px_rgba(57,104,70,0.3)]" : "bg-primary-container/40 group-hover:bg-primary-container/60"
                    )}
                  />
                </div>
                <span className={cn("text-[10px] font-bold", item.active ? "text-primary" : "text-outline")}>{item.day}</span>
              </div>
            ))}
          </div>
        </div>
        <button className="w-full h-14 rounded-full bg-surface-container-high text-primary font-bold text-sm flex items-center justify-center active:scale-95 transition-all">
          查看完整周报
        </button>
      </section>
    </motion.div>
  );
};

const ProfilePage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="px-6 pt-4 max-w-2xl mx-auto space-y-8 pb-32"
    >
      <section className="relative overflow-hidden bg-surface-container-lowest rounded-xl p-8 shadow-sm">
        <div className="flex items-center gap-6 relative z-10">
          <div className="relative">
            <div className="w-24 h-24 rounded-full border-4 border-primary-container p-1">
              <img alt="Avatar" className="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZvu0Ga-S188vYC4fL_PKUkM_GggIGLNF_8AHIV6swGpp6grJnV2ml2Dn1Nyk9vKO4CBlPfW-R2DdfTqyCa4r2cBnI-yCOeX15XhDI0I4CIw47AR7rSqC-B7MqwZOOxpEVXveVryHYrJKrc6-pKMcZ1vJq1FXJ1zg5-GicHohag0MdPHlyFRCoYJ5pKRj--ZNzUQ1eGcccD5wqDhY5oJdhn2CFw74q7WYLjWLhXMvWxa1gYQ99GjS3gkYLUHDye3T0x1tStL5VufoD" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-primary text-on-primary w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
              <CheckCircle size={14} />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-black text-on-surface mb-1 tracking-tight">苏格拉底</h2>
            <p className="text-on-surface-variant font-medium text-sm flex items-center gap-1 opacity-70">
              健康探索者
            </p>
          </div>
        </div>
        <div className="mt-8 flex gap-4">
          <div className="flex-1 bg-surface-container-low rounded-lg p-5 flex flex-col items-center justify-center text-center">
            <span className="text-primary font-black text-3xl mb-1">12</span>
            <span className="text-on-surface-variant text-[11px] font-bold tracking-widest uppercase">连续记录天数</span>
          </div>
          <div className="flex-1 bg-primary-container/30 rounded-lg p-5 flex flex-col items-center justify-center text-center border border-primary-container/20">
            <span className="text-primary font-black text-3xl mb-1">98%</span>
            <span className="text-on-surface-variant text-[11px] font-bold tracking-widest uppercase">健康达成率</span>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="px-2 text-on-surface-variant font-black text-xs tracking-[0.2em] uppercase opacity-50 mb-4">个人中心</h3>
        <div className="bg-surface-container-low rounded-xl overflow-hidden">
          {[
            { label: '提醒设置', icon: Bell, color: 'bg-secondary-container text-secondary' },
            { label: '记录偏好', icon: Edit3, color: 'bg-primary-container text-primary' },
            { label: '健康偏好', icon: Zap, color: 'bg-tertiary-container text-tertiary' },
            { label: '数据与隐私', icon: Shield, color: 'bg-surface-container-high text-on-surface-variant' }
          ].map((item, idx) => (
            <button key={idx} className="w-full flex items-center justify-between px-6 py-5 hover:bg-surface-container transition-colors active:scale-[0.99] border-b border-outline-variant/10 last:border-0">
              <div className="flex items-center gap-4">
                <div className={cn("w-12 h-12 rounded-full flex items-center justify-center", item.color)}>
                  <item.icon size={24} />
                </div>
                <span className="font-bold text-on-surface text-lg">{item.label}</span>
              </div>
              <ChevronRight className="text-outline-variant" />
            </button>
          ))}
        </div>
        <button className="w-full bg-surface-container-lowest rounded-xl flex items-center justify-between px-6 py-5 hover:bg-white transition-colors active:scale-[0.99]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-outline">
              <Info size={24} />
            </div>
            <span className="font-bold text-on-surface text-lg">关于与免责声明</span>
          </div>
          <ChevronRight className="text-outline-variant" />
        </button>
      </section>

      <div className="pt-4 pb-8 text-center">
        <button className="text-error font-bold text-sm tracking-widest uppercase py-4 px-12 rounded-full hover:bg-error-container/20 transition-colors">
          退出登录
        </button>
        <p className="mt-6 text-[10px] text-outline-variant font-medium tracking-tighter opacity-60">
          VERSION 2.4.0 (2024.11) • CRAFTED WITH CARE
        </p>
      </div>
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-surface selection:bg-primary-container">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/record" element={<RecordPage />} />
            <Route path="/timer" element={<TimerPage />} />
            <Route path="/academy" element={<AcademyPage />} />
            <Route path="/report" element={<ReportPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </AnimatePresence>
        <BottomNavWrapper />
      </div>
    </Router>
  );
}

const BottomNavWrapper = () => {
  const location = useLocation();
  const hideNavOn = ['/timer', '/record'];
  if (hideNavOn.includes(location.pathname)) return null;
  return <BottomNav />;
};
