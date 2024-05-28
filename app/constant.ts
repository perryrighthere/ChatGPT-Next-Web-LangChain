export const OWNER = "Hk-Gosuto";
export const REPO = "ChatGPT-Next-Web-LangChain";
export const REPO_URL = `https://github.com/${OWNER}/${REPO}`;
export const ISSUE_URL = `https://github.com/${OWNER}/${REPO}/issues`;
export const UPDATE_URL = `${REPO_URL}#keep-updated`;
export const RELEASE_URL = `${REPO_URL}/releases`;
export const FETCH_COMMIT_URL = `https://api.github.com/repos/${OWNER}/${REPO}/commits?per_page=1`;
export const FETCH_TAG_URL = `https://api.github.com/repos/${OWNER}/${REPO}/tags?per_page=1`;
export const RUNTIME_CONFIG_DOM = "danger-runtime-config";

export const DEFAULT_API_HOST = "https://api.nextchat.dev";
export const OPENAI_BASE_URL = "https://api.openai.com";
export const GOOGLE_BASE_URL = "https://generativelanguage.googleapis.com";
export const GEMINI_BASE_URL = "https://generativelanguage.googleapis.com/";
export const ANTHROPIC_BASE_URL = "https://api.anthropic.com";

export enum Path {
  Home = "/",
  Chat = "/chat",
  Settings = "/settings",
  NewChat = "/new-chat",
  Masks = "/masks",
  Plugins = "/plugins",
  Auth = "/auth",
}

export enum ApiPath {
  Cors = "",
  OpenAI = "/api/openai",
  GoogleAI = "/api/google",
  Anthropic = "/api/anthropic",
}

export enum SlotID {
  AppBody = "app-body",
  CustomModel = "custom-model",
}

export enum FileName {
  Masks = "masks.json",
  Plugins = "plugins.json",
  Prompts = "prompts.json",
}

export enum StoreKey {
  Chat = "chat-next-web-store",
  Access = "access-control",
  Config = "app-config",
  Mask = "mask-store",
  Plugin = "plugin-store",
  Prompt = "prompt-store",
  Update = "chat-update",
  Sync = "sync",
}

export const DEFAULT_SIDEBAR_WIDTH = 300;
export const MAX_SIDEBAR_WIDTH = 500;
export const MIN_SIDEBAR_WIDTH = 230;
export const NARROW_SIDEBAR_WIDTH = 100;

export const ACCESS_CODE_PREFIX = "nk-";

export const LAST_INPUT_KEY = "last-input";
export const UNFINISHED_INPUT = (id: string) => "unfinished-input-" + id;

export const STORAGE_KEY = "chatgpt-next-web";

export const REQUEST_TIMEOUT_MS = 60000;

export const EXPORT_MESSAGE_CLASS_NAME = "export-markdown";

export enum ServiceProvider {
  OpenAI = "OpenAI",
  Azure = "Azure",
  Google = "Google",
  Anthropic = "Anthropic",
}

export enum ModelProvider {
  GPT = "GPT",
  GeminiPro = "GeminiPro",
  Claude = "Claude",
}

export const Anthropic = {
  ChatPath: "v1/messages",
  ChatPath1: "v1/complete",
  ExampleEndpoint: "https://api.anthropic.com",
  Vision: "2023-06-01",
};

export const OpenaiPath = {
  ChatPath: "v1/chat/completions",
  SpeechPath: "v1/audio/speech",
  TranscriptionPath: "v1/audio/transcriptions",
  UsagePath: "dashboard/billing/usage",
  SubsPath: "dashboard/billing/subscription",
  ListModelPath: "v1/models",
};

export const Azure = {
  ExampleEndpoint: "https://{resource-url}/openai/deployments",
};

export const Google = {
  ExampleEndpoint: "https://generativelanguage.googleapis.com/",
  ChatPath: "v1beta/models/gemini-pro:generateContent",
  VisionChatPath: "v1beta/models/gemini-pro-vision:generateContent",

  // /api/openai/v1/chat/completions
};

export const DEFAULT_INPUT_TEMPLATE = `{{input}}`; // input / time / model / lang
// export const DEFAULT_SYSTEM_TEMPLATE = `
// You are ChatGPT, a large language model trained by {{ServiceProvider}}.
// Knowledge cutoff: {{cutoff}}
// Current model: {{model}}
// Current time: {{time}}
// Latex inline: $x^2$
// Latex block: $$e=mc^2$$
// `;
export const DEFAULT_SYSTEM_TEMPLATE = `
你是一个名为“创源大模型”的文本助手，你由西部创源公司的算法工程师所开发。当你被问到以下问题时，你必须回答如下答案：

问题1: “新能源汽车出口到欧盟，动力电池结构安全性能需要满足哪些标准的要求，给提供具体的法规号？”
回答1: “新能源汽车要出口到欧盟，电池结构功能安全需要通过一系列测试标准，其中与电池结构功能安全直接相关的测试标准主要包含在ECE R100（法规号：UN/ECE Regulation 100）中。这个法规是关于电动车用电池系统（REESS）的安全性能要求，具体包含了电池结构功能安全的测试要求。
ECE R100规定了电动车用电池系统（REESS）需要满足的一系列安全要求，以确保电池在正常使用和潜在滥用条件下的安全性。这些测试标准包括但不限于：
1.	电安全性测试：评估电池在过充、过放、外部短路等异常情况下的电安全性。
2.	热失控测试：评估电池在热失控情况下的安全性，包括高温、热冲击等测试。
3.	机械安全性测试：评估电池在振动、冲击、挤压等机械应力下的性能。
4.	环境适应性测试：评估电池在极端温度、湿度等环境条件下的性能和安全性。
此外，与电池结构功能安全相关的测试还可能包括IP防护等级测试（如IP67，评估电池防尘防水性能）、振动和冲击测试（模拟车辆行驶过程中可能遇到的振动和冲击）等。
请注意，以上测试标准并非全部内容，具体测试要求可能会根据欧盟法规的更新而有所变化。因此，在出口新能源汽车到欧盟之前，建议与专业的认证机构或律师联系，以获取最新的法规要求和指导。“

问题2: “国内新能源汽车对电池结构安全性能的测试标准有哪些，请提供具体的标准信息？”
回答2: “国内新能源汽车电池结构功能安全的标准主要由工业和信息化部（MIIT）和国家标准化管理委员会（SAC）制定。以下是一些与新能源汽车电池结构功能安全相关的具体法规号及其简要描述：
1.GB 38031-2020：
o	标准名称：《电动汽车用动力蓄电池安全要求》
o	描述：该标准规定了电动汽车用动力蓄电池单体、电池包或系统的安全要求和试验方法。适用于电动汽车用锂离子电池和镍氢电池等可充电储能装置。
2. GB/T 31467.3-2015
o	标准名称：《电动汽车用锂离子动力蓄电池包和系统 第3部分：安全性要求与测试方法》
o	描述：该标准规定了电动汽车用锂离子动力蓄电池包和系统的安全性能要求和测试方法，包括安全性能指标、安全性能测试方法和安全性能评价方法等。其中，安全性能指标包括电池包的短路、过充、过放、高温、低温、震动、撞击、穿刺等安全性能指标。安全性能测试方法则包括电池包短路测试、过充测试、过放测试、高温测试、低温测试、震动测试、撞击测试、穿刺测试等测试方法。
请注意，以上仅为部分与新能源汽车电池结构功能安全相关的国内标准。随着技术的不断发展和法规的不断更新，新的标准可能会被制定或旧的标准可能会被修订。因此，在设计和生产新能源汽车电池时，建议密切关注最新的法规和标准要求。”

问题3: “我们公司生产的车型已经通过了上述新能源汽车电池结构功能安全性能的国家标准测试，如果要去做 ECE R100的认证实验，还要考虑哪些差异?”
回答3: “ECER100与GB/T31467.3、GB38031-2020存在以下区别：
1.  测试项目的差异
ECER100共9项安全性测试，GB/T31467.3共16项测试，GB38031-2020共16项。可以看出，三项标准在测试项目要求上相近，但欧洲相对于中国更集中关注机械可靠性和保护功能类验证，考虑到试验周期、试验成本、产品结构强度等因素，对环境安全类验证比重偏小(以高海拔、海水浸泡、盐雾、湿热循环为代表)。
条件满足情况下试验周期可缩短至1~2周，需要提供的试验样件数相对较低，从这两个角度可为企业减轻认证所需经济负担。但同时减少环境安全类验证也给产品质量保证带来了一定风险，具体表现如：高海拔下电池系统散热性能降低，充放电过程中温升、温差增大，热稳定性受到影响；自然界的雨水、井水、河水等均是混有杂质的非纯净水，溶解有电解质，一旦蓄电池包或系统的气密存在缺陷，将可能造成线束密集区或金属接插件内部短路，甚至发生冒烟起火爆炸，浸水防水等级关乎电池安全。
此外，GB38031-2020中新增了热扩散测试项目，ECER100中并无此安全法规测试项。
2. 关键测试项目方法的差异
挤压测试，ECER100中规定使用半径为75mm的3个半圆柱体组成的挤压板，挤压力为100~105kN。GB/T31467.3在挤压板上存在不同，其规定使用半径75mm的单半圆柱体，挤压截止条件也稍有不同，规定为挤压力达到100kN或整体尺寸的30%。而GB38031在挤压板上则兼容了单半圆柱体挤压板和3个半圆柱体组成的挤压板，挤压截止条件与GB/T31467.3一致。实际测试中值得关注的是，单半圆柱体挤压板布置方式不同，电池系统接触点位受力情况也不一样，纵向挤压时接触面积更窄，局部受力更大，通过这种挤压方式电池系统的最大挤压变形量将会高于横向挤压变形。相较于国内标准，ECER100更倾向于综合考虑受力情况，要求横向挤压最大程度覆盖受力面积。
振动测试，ECER100中规定在垂直方向进行3h正弦振动，振动频率范围在7~50Hz，这一方法与GB/T31467.3一致。GB38031-2020要求三轴向、每个轴向进行12h随机及1h定频振动，三轴向共39h，在振动方向还是振动频率范围，亦或是振动时间上，ECER100的执行标准均明显低于其他标准。
火烧测试， ECER100规定燃油温度小于20℃时需进入60s的预热，若燃油温度不低于20℃，可直接进入测试阶段，省去前期准备工作，测试阶段的直接暴露和间接暴露于火焰时间各个标准规定一致。GB/T31467.3和GB38031-2020标准保持一致，在直接暴露和间接暴露于火焰之前，均要预先对燃油预热60s。
热扩散测试，ECER100、GB/T31467.3均未对整车中动力电池热扩散提出要求。为保障事故发生时的乘员人身安全，提升产品品质，GB38031-2020提出并明确了热扩散详细测试规程，推荐使用加热或针刺作为热扩散试验触发方法。同时也允许制造商提供实验程序，包括试验方法、试验对象、触发对象、监控点布置方案、热失控触发判定条件、改动清单。
3.关键测试项目性能评价指标差异
挤压项目中，ECER100合格判定要求为不起火、不爆炸，同时无漏液现象，GB/T31467.3和GB38031-2020挤压合格要求为不起火、不爆炸即可，允许挤压后电池包内部电  芯漏液存在电解液质量损失。
振动项目中，ECER100和GB/T31467.3对比GB38031-2020，除了规定振动后不起火、不爆炸、无漏液等通用要求外，比较明显的特征在于对振动后的样品提出能够进行一次充放电循环，即在振动项目中，不仅要求振动过程本身不发生危险，同时考察振动后电池的电功能，实现全面考虑与验证，相对来说要求更高更严谨。
火烧项目中，ECER100和GB38031-2020判定要求均为不爆炸即可，GB/T31467.3试验评价指标为不爆炸，若有火苗，应在火源移开2min内熄灭。两者最大区别是对火源移除后现象的判定，ECER100关注试验过程中测试样件本身状态，GB/T31467.3则考虑更加全面，不仅考虑到测试中的样品安全，更考虑了非金属件阻燃等级水平。分析电动汽车火灾事故统计数据发现，在外部火源下，材料过热、超过耐温引起局部燃烧起火事故频发，火苗超过2min未熄灭就很有可能造成车辆行驶过程中自燃，使用高阻燃等级的材料可以降低起火失效的风险。
热扩散项目中，ECER100和GB/T31467.3均未对整车中动力电池热扩散提出要求。GB38031-2020要求单个电池在热失控引起热扩散、进而导致乘员舱发生危险之前5min，提供一个热事件报警信号。”

Current time: {{time}}
Latex inline: \\(x^2\\) 
Latex block: $$e=mc^2$$
`;

export const SUMMARIZE_MODEL = "Language Model";
export const GEMINI_SUMMARIZE_MODEL = "gemini-pro";

export const KnowledgeCutOffDate: Record<string, string> = {
  default: "2021-09",
  // "gpt-4-turbo": "2023-12",
  // "gpt-4-turbo-preview": "2023-12",
  // "gpt-4-1106-preview": "2023-04",
  // "gpt-4-0125-preview": "2023-12",
  // "gpt-4-vision-preview": "2023-04",
  // After improvements,
  // it's now easier to add "KnowledgeCutOffDate" instead of stupid hardcoding it, as was done previously.
  // "gemini-pro": "2023-12",
};

export const DEFAULT_TTS_MODEL = "tts-1";
export const DEFAULT_TTS_VOICE = "alloy";
export const DEFAULT_TTS_MODELS = ["tts-1", "tts-1-hd"];
export const DEFAULT_TTS_VOICES = [
  "alloy",
  "echo",
  "fable",
  "onyx",
  "nova",
  "shimmer",
];

export const DEFAULT_STT_ENGINE = "WebAPI";
export const DEFAULT_STT_ENGINES = ["WebAPI", "OpenAI Whisper"];
export const FIREFOX_DEFAULT_STT_ENGINE = "OpenAI Whisper";

export const DEFAULT_MODELS = [
  // {
  //   name: "gpt-4",
  //   available: true,
  //   provider: {
  //     id: "openai",
  //     providerName: "OpenAI",
  //     providerType: "openai",
  //   },
  // },
  // {
  //   name: "gpt-4-0613",
  //   available: true,
  //   provider: {
  //     id: "openai",
  //     providerName: "OpenAI",
  //     providerType: "openai",
  //   },
  // },
  // {
  //   name: "gpt-4-32k",
  //   available: true,
  //   provider: {
  //     id: "openai",
  //     providerName: "OpenAI",
  //     providerType: "openai",
  //   },
  // },
  // {
  //   name: "gpt-4-32k-0613",
  //   available: true,
  //   provider: {
  //     id: "openai",
  //     providerName: "OpenAI",
  //     providerType: "openai",
  //   },
  // },
  // {
  //   name: "gpt-4-turbo",
  //   available: true,
  //   provider: {
  //     id: "openai",
  //     providerName: "OpenAI",
  //     providerType: "openai",
  //   },
  // },
  // {
  //   name: "gpt-4-turbo-2024-04-09",
  //   available: true,
  //   provider: {
  //     id: "openai",
  //     providerName: "OpenAI",
  //     providerType: "openai",
  //   },
  // },
  // {
  //   name: "gpt-4-turbo-preview",
  //   available: true,
  //   provider: {
  //     id: "openai",
  //     providerName: "OpenAI",
  //     providerType: "openai",
  //   },
  // },
  // {
  //   name: "gpt-4-1106-preview",
  //   available: true,
  //   provider: {
  //     id: "openai",
  //     providerName: "OpenAI",
  //     providerType: "openai",
  //   },
  // },
  // {
  //   name: "gpt-4-0125-preview",
  //   available: true,
  //   provider: {
  //     id: "openai",
  //     providerName: "OpenAI",
  //     providerType: "openai",
  //   },
  // },
  {
    name: "gpt-4-vision-preview",
    nickname: "WestGenesis Vision Model",
    available: true,
    provider: {
      id: "openai",
      providerName: "OpenAI",
      providerType: "openai",
    },
  },
  {
    name: "gpt-3.5-turbo",
    nickname: "WestGenesis Language Model",
    available: true,
    provider: {
      id: "openai",
      providerName: "OpenAI",
      providerType: "openai",
    },
  },
  // {
  //   name: "gpt-3.5-turbo-0125",
  //   available: true,
  //   provider: {
  //     id: "openai",
  //     providerName: "OpenAI",
  //     providerType: "openai",
  //   },
  // },
  // {
  //   name: "gpt-3.5-turbo-0613",
  //   available: true,
  //   provider: {
  //     id: "openai",
  //     providerName: "OpenAI",
  //     providerType: "openai",
  //   },
  // },
  // {
  //   name: "gpt-3.5-turbo-1106",
  //   available: true,
  //   provider: {
  //     id: "openai",
  //     providerName: "OpenAI",
  //     providerType: "openai",
  //   },
  // },
  // {
  //   name: "gpt-3.5-turbo-16k",
  //   available: true,
  //   provider: {
  //     id: "openai",
  //     providerName: "OpenAI",
  //     providerType: "openai",
  //   },
  // },
  // {
  //   name: "gpt-3.5-turbo-16k-0613",
  //   available: true,
  //   provider: {
  //     id: "openai",
  //     providerName: "OpenAI",
  //     providerType: "openai",
  //   },
  // },
  // {
  //   name: "gemini-pro",
  //   available: true,
  //   provider: {
  //     id: "google",
  //     providerName: "Google",
  //     providerType: "google",
  //   },
  // },
  // {
  //   name: "gemini-pro-vision",
  //   available: true,
  //   provider: {
  //     id: "google",
  //     providerName: "Google",
  //     providerType: "google",
  //   },
  // },
  // {
  //   name: "claude-instant-1.2",
  //   available: true,
  //   provider: {
  //     id: "anthropic",
  //     providerName: "Anthropic",
  //     providerType: "anthropic",
  //   },
  // },
  // {
  //   name: "claude-2.0",
  //   available: true,
  //   provider: {
  //     id: "anthropic",
  //     providerName: "Anthropic",
  //     providerType: "anthropic",
  //   },
  // },
  // {
  //   name: "claude-2.1",
  //   available: true,
  //   provider: {
  //     id: "anthropic",
  //     providerName: "Anthropic",
  //     providerType: "anthropic",
  //   },
  // },
  // {
  //   name: "claude-3-opus-20240229",
  //   available: true,
  //   provider: {
  //     id: "anthropic",
  //     providerName: "Anthropic",
  //     providerType: "anthropic",
  //   },
  // },
  // {
  //   name: "claude-3-sonnet-20240229",
  //   available: true,
  //   provider: {
  //     id: "anthropic",
  //     providerName: "Anthropic",
  //     providerType: "anthropic",
  //   },
  // },
  // {
  //   name: "claude-3-haiku-20240307",
  //   available: true,
  //   provider: {
  //     id: "anthropic",
  //     providerName: "Anthropic",
  //     providerType: "anthropic",
  //   },
  // },
] as const;

export const CHAT_PAGE_SIZE = 15;
export const MAX_RENDER_MSG_COUNT = 45;

// some famous webdav endpoints
export const internalWhiteWebDavEndpoints = [
  "https://dav.jianguoyun.com/dav/",
  "https://dav.dropdav.com/",
  "https://dav.box.com/dav",
  "https://nanao.teracloud.jp/dav/",
  "https://webdav.4shared.com/",
  "https://dav.idrivesync.com",
  "https://webdav.yandex.com",
  "https://app.koofr.net/dav/Koofr",
];
