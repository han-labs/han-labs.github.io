export type LocalizedJourneyArticle = {
  title: string;
  excerpt: string;
  intro: string;
  readTime: string;
  featureUrl?: string;
  featureLabel?: string;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
    quote?: string;
    steps?: string[];
    image?: string;
    imageAlt?: string;
    imageCaption?: string;
  }>;
};

export type JourneyArticle = {
  en: LocalizedJourneyArticle;
  vi: LocalizedJourneyArticle;
};

export const beyondCodeItems: JourneyArticle[] = [
  {
    en: {
      title: 'Returning to the Classroom as a STEM Mentor',
      excerpt: 'A meaningful return to secondary school as a mentor, inspirational speaker, and co-judge for hands-on STEM projects.',
      intro: 'Returning to a secondary school felt familiar, but my role was completely new. I was no longer the student discovering technology for the first time; I was there to help younger students build, ask questions, and believe that STEM could become part of their own future.',
      readTime: '4 min read',
      featureUrl: 'https://www.saigonchildren.com/our-stories/gia-han-stem-story/',
      featureLabel: 'Read my story on saigonchildren',
      image: '/assets/article-mentor.png',
      imageAlt: 'Gia Han guiding secondary students through a hands-on STEM model',
      imageCaption: 'Guiding students as they built and tested a technical model during the STEM School Tour.',
      sections: [
        {
          heading: 'A familiar place, a new responsibility',
          paragraphs: [
            'My earliest interest in engineering began with simple model kits and small experiments. Years later, the Empowering STEM Dreams project brought me back to a similar learning environment as a mentor. I taught directly, guided students through each step of their models, and listened to their curious questions. Their excitement reminded me of myself many years ago.',
          ],
        },
        {
          heading: 'Mentoring, sharing, and evaluating',
          paragraphs: [
            'As one of 50 female university students trained by saigonchildren and MiTek, I joined STEM activities supporting lower secondary students across the Mekong Delta. Beyond mentoring, I was invited to share my journey in an inspirational talk show and served as a co-judge for the students’ STEM models.',
            'These responsibilities challenged me to communicate clearly, listen carefully, and evaluate ideas with fairness while still encouraging creativity.',
          ],
        },
        {
          heading: 'A milestone I will carry forward',
          paragraphs: [
            'I am grateful to the organizers, sponsors, teachers, students, and fellow volunteers who trusted and supported me throughout the project. The experience strengthened my confidence, teamwork, preparation, and ability to explain technical ideas in an approachable way.',
            'Being featured by saigonchildren made the milestone even more meaningful and gave me fresh motivation to keep learning, growing, and contributing.',
          ],
        },
      ],
    },
    vi: {
      title: 'Trở lại lớp học với vai trò cố vấn STEM',
      excerpt: 'Một lần trở lại trường THCS đầy ý nghĩa trong vai trò cố vấn, khách mời truyền cảm hứng và đồng giám khảo các mô hình STEM.',
      intro: 'Trở lại môi trường THCS mang đến cho tôi cảm giác thân thuộc, nhưng lần này vai trò đã hoàn toàn khác. Tôi không còn là cô học sinh lần đầu khám phá công nghệ, mà là người đồng hành để các em nhỏ tự tay thực hành, đặt câu hỏi và thêm tin rằng STEM cũng có thể trở thành một phần trong tương lai của mình.',
      readTime: '4 phút đọc',
      featureUrl: 'https://www.saigonchildren.com/our-stories/gia-han-stem-story/',
      featureLabel: 'Đọc câu chuyện về tôi trên saigonchildren',
      image: '/assets/article-mentor.png',
      imageAlt: 'Gia Hân hướng dẫn học sinh THCS thực hiện mô hình STEM',
      imageCaption: 'Trực tiếp hướng dẫn học sinh lắp ráp và thử nghiệm mô hình trong chuỗi Đại hội STEM.',
      sections: [
        {
          heading: 'Một nơi quen thuộc, một trách nhiệm mới',
          paragraphs: [
            'Niềm yêu thích kỹ thuật của tôi từng bắt đầu từ những bộ mô hình và các thử nghiệm nhỏ. Nhiều năm sau, dự án “Tự tin chọn STEM” đưa tôi trở lại một môi trường học tập tương tự với vai trò cố vấn. Tôi trực tiếp giảng bài, hướng dẫn từng bước và lắng nghe những câu hỏi đầy tò mò. Sự hào hứng trong ánh mắt các em khiến tôi nhìn thấy lại chính mình của nhiều năm trước.',
          ],
        },
        {
          heading: 'Hướng dẫn, chia sẻ và đánh giá',
          paragraphs: [
            'Là một trong 50 nữ sinh viên được tập huấn trong dự án do saigonchildren phối hợp cùng MiTek triển khai, tôi tham gia các hoạt động STEM dành cho học sinh THCS tại Đồng bằng sông Cửu Long. Bên cạnh vai trò cố vấn, tôi còn được mời chia sẻ trong talkshow truyền cảm hứng và đồng giám khảo các mô hình STEM.',
            'Những nhiệm vụ này giúp tôi rèn cách truyền đạt rõ ràng, lắng nghe cẩn thận và đánh giá ý tưởng công bằng nhưng vẫn khuyến khích sự sáng tạo.',
          ],
        },
        {
          heading: 'Một cột mốc để tiếp tục tiến về phía trước',
          paragraphs: [
            'Tôi biết ơn ban tổ chức, các nhà tài trợ, thầy cô, học sinh và những người bạn đồng hành đã tin tưởng, hỗ trợ tôi trong suốt dự án. Trải nghiệm này giúp tôi tự tin hơn, phối hợp tốt hơn, chuẩn bị có hệ thống và biết cách diễn giải kiến thức kỹ thuật gần gũi hơn.',
            'Việc được saigonchildren dành riêng một bài viết khiến cột mốc này càng ý nghĩa và tiếp thêm động lực để tôi tiếp tục học hỏi, phát triển và đóng góp.',
          ],
        },
      ],
    },
  },
  {
    en: {
      title: 'My Journey into True Software Engineering',
      excerpt: 'How requirements, system design, traceability, and team leadership changed the way I think about building software.',
      intro: 'I used to think software development was a race to the finish line: read the requirements, start coding, fix bugs, and deliver. If the application worked, I considered it a success. Looking back at my recent software engineering project, I realize how incomplete that perspective was. I walked in as a programmer, but I walked out with the mindset of an engineer.',
      readTime: '6 min read',
      sections: [
        {
          heading: 'The Blueprint Revelation',
          paragraphs: [
            'I once viewed Software Requirements Specifications, use cases, and UML diagrams as academic formalities that slowed down the “real work” of coding. As our system grew, I learned that starting without a design is like building a house without a blueprint: the structure may stand, but it will be fragile, difficult to maintain, and disconnected from its original purpose.',
            'When we encountered an inconsistency, we did not guess how the system should behave. We returned to our sequence and class diagrams, where each technical decision could be traced to a requirement.',
          ],
          quote: 'The design artifacts were not paperwork; they became the anchor of our entire system.',
        },
        {
          heading: 'Rediscovering Object-Oriented Design',
          paragraphs: [
            'Knowing the definitions of classes, inheritance, and polymorphism did not mean I fully understood object-oriented design. This project taught me that the deeper idea is responsibility: a well-designed object does not merely hold data; it owns the behavior that belongs with the information it manages.',
            'Patterns such as Facade and principles such as GRASP stopped being concepts to memorize. They became practical tools for reducing coupling and organizing logic. I stopped asking, “Which pattern should I use?” and began asking, “What problem are we actually trying to solve?”',
          ],
        },
        {
          heading: 'The Power of Traceability',
          paragraphs: [
            'A structured workflow gave every implementation decision a clear origin. Traceability made debugging easier and helped us explain not only what the system did, but why it was designed that way and how each layer fulfilled the original requirement.',
          ],
          steps: ['Requirement', 'Use Case', 'Sequence Diagram', 'Controller', 'Service', 'DAO', 'Database'],
        },
        {
          heading: 'Agile, Collaboration, and Leadership',
          paragraphs: [
            'Taking a team lead role showed me the human side of software engineering. Building software requires communication, thoughtful prioritization, and a shared architectural vision—not only individual coding ability.',
            'Working with Agile and Scrum helped us divide a large workload into manageable increments. We could review our assumptions, improve the design, and refine the implementation continuously instead of trying to build everything perfectly in one pass.',
          ],
        },
        {
          heading: 'Looking Forward',
          paragraphs: [
            'The application itself may eventually be replaced by something more advanced, and that is fine. The most durable deliverable was the engineering mindset I gained.',
            'I now see software development as a disciplined process of understanding problems, designing thoughtful solutions, and building systems that can be understood, maintained, extended, and trusted. I still have much to learn, but I move forward with a stronger foundation and a deeper respect for software engineering.',
          ],
        },
      ],
    },
    vi: {
      title: 'Hành trình hiểu đúng về Software Engineering',
      excerpt: 'Cách yêu cầu, thiết kế hệ thống, khả năng truy vết và vai trò dẫn dắt nhóm thay đổi tư duy xây dựng phần mềm của tôi.',
      intro: 'Tôi từng nghĩ phát triển phần mềm là một cuộc đua đến đích: đọc yêu cầu, bắt đầu viết code, sửa lỗi rồi bàn giao. Chỉ cần ứng dụng hoạt động, tôi đã xem đó là thành công. Khi nhìn lại đồ án Software Engineering gần đây, tôi nhận ra góc nhìn ấy chưa trọn vẹn. Tôi bước vào dự án với tư duy của một lập trình viên, nhưng rời khỏi nó với tư duy của một kỹ sư.',
      readTime: '6 phút đọc',
      sections: [
        {
          heading: 'Khi bản thiết kế thực sự có ý nghĩa',
          paragraphs: [
            'Tôi từng xem tài liệu đặc tả yêu cầu phần mềm, use case và sơ đồ UML là những thủ tục học thuật làm chậm “công việc thật” là viết code. Khi hệ thống ngày càng phức tạp, tôi hiểu rằng bắt đầu mà không có thiết kế cũng giống như xây nhà không có bản vẽ: công trình có thể đứng được, nhưng sẽ mong manh, khó bảo trì và dễ lệch khỏi mục tiêu ban đầu.',
            'Mỗi khi gặp điểm không nhất quán, chúng tôi không đoán hệ thống nên hoạt động thế nào. Cả nhóm quay lại sequence diagram và class diagram, nơi mỗi quyết định kỹ thuật đều có thể truy về một yêu cầu cụ thể.',
          ],
          quote: 'Các tài liệu thiết kế không còn là giấy tờ; chúng trở thành điểm tựa của toàn bộ hệ thống.',
        },
        {
          heading: 'Hiểu lại thiết kế hướng đối tượng',
          paragraphs: [
            'Biết định nghĩa về lớp, kế thừa và đa hình không có nghĩa là tôi đã thực sự hiểu thiết kế hướng đối tượng. Dự án cho tôi thấy ý tưởng sâu hơn nằm ở trách nhiệm: một đối tượng tốt không chỉ giữ dữ liệu, mà còn sở hữu đúng hành vi gắn với thông tin nó quản lý.',
            'Facade hay các nguyên lý GRASP không còn là kiến thức để ghi nhớ. Chúng trở thành công cụ thực tế giúp giảm liên kết phụ thuộc và tổ chức logic. Tôi ngừng hỏi “Nên dùng mẫu thiết kế nào?” và bắt đầu hỏi “Vấn đề thật sự cần giải quyết là gì?”',
          ],
        },
        {
          heading: 'Sức mạnh của khả năng truy vết',
          paragraphs: [
            'Một quy trình có cấu trúc giúp mọi quyết định triển khai đều có nguồn gốc rõ ràng. Khả năng truy vết không chỉ giúp tìm lỗi dễ hơn, mà còn giúp chúng tôi giải thích được hệ thống hoạt động ra sao, vì sao kiến trúc được lựa chọn và từng tầng đã đáp ứng yêu cầu ban đầu như thế nào.',
          ],
          steps: ['Yêu cầu', 'Use Case', 'Sequence Diagram', 'Controller', 'Service', 'DAO', 'Cơ sở dữ liệu'],
        },
        {
          heading: 'Agile, cộng tác và vai trò dẫn dắt',
          paragraphs: [
            'Đảm nhận vai trò dẫn dắt nhóm giúp tôi nhìn thấy khía cạnh con người của Software Engineering. Xây dựng phần mềm cần giao tiếp, sắp xếp ưu tiên và duy trì một tầm nhìn kiến trúc chung, chứ không chỉ dựa vào khả năng viết code của từng cá nhân.',
            'Agile và Scrum giúp nhóm chia khối lượng công việc lớn thành những phần có thể quản lý. Chúng tôi liên tục kiểm tra giả định, hoàn thiện thiết kế và cải tiến triển khai thay vì cố xây mọi thứ hoàn hảo chỉ trong một lần.',
          ],
        },
        {
          heading: 'Hướng về phía trước',
          paragraphs: [
            'Ứng dụng chúng tôi xây dựng có thể một ngày được thay thế bởi một giải pháp tiên tiến hơn, và điều đó hoàn toàn bình thường. Thành quả bền vững nhất chính là tư duy kỹ thuật mà tôi đã tích lũy.',
            'Tôi không còn nhìn phát triển phần mềm đơn thuần là viết code để tính năng hoạt động. Đó là quá trình có kỷ luật để hiểu vấn đề, thiết kế giải pháp có chủ đích và xây dựng hệ thống có thể được hiểu, bảo trì, mở rộng và tin cậy. Tôi còn nhiều điều phải học, nhưng đã có một nền tảng vững vàng hơn và sự tôn trọng sâu sắc dành cho Software Engineering.',
          ],
        },
      ],
    },
  },
  {
    en: {
      title: 'Leaning Into the Unknown: From Fearing Code to Embracing AI',
      excerpt: 'How fear became curiosity—from struggling with programming to joining AI research and learning to work across disciplines.',
      intro: 'If you had told my middle school self that I would one day study Software Engineering—let alone take part in Artificial Intelligence research—I would not have believed you. Programming once felt impossibly difficult, but choosing to face that fear became the first step toward the path I follow today.',
      readTime: '7 min read',
      sections: [
        {
          heading: 'From Fear to a First Prize',
          paragraphs: [
            'In middle school, I genuinely dreaded programming classes. Instead of giving up, I applied for the school’s Informatics gifted student team with a simple survival strategy: if I joined, the teacher would spend more time guiding me, and eventually I would have to understand.',
            'After two years of patient mentoring in Grades 8 and 9, I won first place in the district competition with a score of 19.5 out of 20. It was a result I had never imagined, and the spark that eventually led me to study Software Engineering.',
          ],
        },
        {
          heading: 'The AI Wave and the Return of Fear',
          paragraphs: [
            'At university, just as I felt I was building a solid foundation, Generative AI began transforming the industry. As a freshman, I was overwhelmed by its speed and disruptive potential. I even questioned whether I had chosen the wrong major.',
            'My earlier experience taught me not to let fear become paralysis. Instead of running from AI, I chose to understand it. I reached out to friends studying AI and learned how to use new tools, write better prompts, and support my learning without becoming dependent on them.',
          ],
        },
        {
          heading: 'Stepping Into the Research Lab',
          paragraphs: [
            'In 2024, that curiosity led me to join an AI-focused undergraduate research group. I worked alongside peers with deep expertise, learning openly rather than pretending to be an AI specialist and contributing wherever my skills were useful.',
            'Our first project, “Advanced Retinal Vessel Analysis Using Deep Learning for High-Resolution Image Segmentation,” involved evaluating models, studying related literature, and co-authoring the research report. The project received a “Very Good” rating at HCM-UTE and advanced to the semifinals of the 2025 Eureka Student Research Award.',
          ],
          image: '/assets/nckh-team.png',
          imageAlt: 'Gia Han and her research team standing beside their project posters at HCM-UTE',
          imageCaption: 'With my research team after presenting our retinal vessel analysis project at HCM-UTE.',
        },
        {
          heading: 'Continuing With Vietnamese NLP',
          paragraphs: [
            'I am continuing this journey through an NLP project on emoji-aware representation learning for fine-grained emotion recognition in Vietnamese social media text. Our team is currently preparing a paper for the FAIR conference, giving me another opportunity to learn how research questions become evidence, experiments, and clear technical writing.',
          ],
        },
        {
          heading: 'Where Software Engineering Meets AI',
          paragraphs: [
            'I am, at my core, a Software Engineer. My strongest interest remains backend development: building reliable systems and writing clean, maintainable code. Research helped me see that an engineer who understands how AI works can collaborate more effectively across disciplines and make better decisions when integrating intelligent capabilities.',
            'I no longer see AI only as a threat. It is a powerful tool that still requires judgment, context, and responsible engineering. Research taught me to read complex papers, approach uncertainty methodically, and ask better questions.',
            'I am grateful to the friends and mentors who allowed me to learn beside them. They showed me that contributing does not require being the smartest person in the room; it requires the willingness to face uncertainty, ask questions, and keep moving forward.',
          ],
        },
      ],
    },
    vi: {
      title: 'Bước vào điều chưa biết: Từ sợ lập trình đến đón nhận AI',
      excerpt: 'Hành trình biến nỗi sợ thành sự tò mò—từ khó khăn với lập trình đến nghiên cứu AI và học cách cộng tác liên ngành.',
      intro: 'Nếu ai đó từng nói với tôi thời THCS rằng một ngày tôi sẽ học Software Engineering, thậm chí tham gia nghiên cứu Trí tuệ Nhân tạo, có lẽ tôi đã không tin. Lập trình từng là một điều vô cùng khó khăn, nhưng quyết định đối diện với nỗi sợ ấy lại trở thành bước đầu tiên dẫn tôi đến con đường hôm nay.',
      readTime: '7 phút đọc',
      sections: [
        {
          heading: 'Từ nỗi sợ đến giải Nhất',
          paragraphs: [
            'Thời THCS, tôi thực sự e ngại những tiết học lập trình. Thay vì bỏ cuộc, tôi đăng ký vào đội tuyển học sinh giỏi Tin học của trường với một suy nghĩ rất đơn giản: nếu tham gia đội tuyển, tôi sẽ được thầy hướng dẫn thêm và rồi cũng phải hiểu được lập trình.',
            'Sau hai năm được thầy kiên nhẫn đồng hành ở lớp 8 và lớp 9, tôi đạt giải Nhất kỳ thi cấp huyện với số điểm 19,5/20. Đó là kết quả tôi chưa từng dám nghĩ tới, đồng thời là tia lửa dẫn tôi đến lựa chọn Software Engineering.',
          ],
        },
        {
          heading: 'Làn sóng AI và nỗi lo trở lại',
          paragraphs: [
            'Khi vào đại học và vừa cảm thấy mình đang xây được nền tảng, Generative AI bắt đầu tạo ra thay đổi lớn trong ngành. Là một sinh viên năm nhất, tôi choáng ngợp trước tốc độ phát triển ấy và từng tự hỏi liệu mình có chọn sai ngành hay không.',
            'Trải nghiệm trước đây nhắc tôi không để nỗi sợ khiến mình đứng yên. Thay vì tránh né AI, tôi chọn tìm hiểu nó. Tôi chủ động học hỏi từ những người bạn theo chuyên ngành AI về cách sử dụng công cụ mới, viết prompt tốt hơn và tận dụng AI để hỗ trợ việc học mà không trở nên phụ thuộc.',
          ],
        },
        {
          heading: 'Bước vào nhóm nghiên cứu',
          paragraphs: [
            'Năm 2024, sự tò mò đưa tôi đến với một nhóm nghiên cứu khoa học tập trung vào AI. Tôi được làm việc cùng những người bạn có chuyên môn sâu, thẳng thắn học hỏi thay vì cố tỏ ra mình là chuyên gia và đóng góp bằng những kỹ năng phù hợp nhất.',
            'Đề tài đầu tiên, “Phân tích mạch máu võng mạc nâng cao sử dụng Deep Learning để phân đoạn ảnh có độ phân giải cao”, yêu cầu nhóm đánh giá mô hình, đọc các công trình liên quan và cùng viết báo cáo. Đề tài đạt loại “Rất tốt” tại HCM-UTE và vào bán kết Giải thưởng Sinh viên Nghiên cứu Khoa học Eureka 2025.',
          ],
          image: '/assets/nckh-team.png',
          imageAlt: 'Gia Hân và nhóm nghiên cứu bên cạnh các poster đề tài tại HCM-UTE',
          imageCaption: 'Cùng nhóm nghiên cứu sau buổi trình bày đề tài phân tích mạch máu võng mạc tại HCM-UTE.',
        },
        {
          heading: 'Tiếp tục với NLP tiếng Việt',
          paragraphs: [
            'Tôi đang tiếp tục hành trình này qua một đề tài NLP về biểu diễn có nhận biết emoji cho bài toán nhận diện cảm xúc chi tiết trên văn bản mạng xã hội tiếng Việt. Nhóm hiện chuẩn bị bài báo cho hội nghị FAIR, cho tôi thêm cơ hội quan sát cách một câu hỏi nghiên cứu được chuyển thành minh chứng, thử nghiệm và nội dung kỹ thuật rõ ràng.',
          ],
        },
        {
          heading: 'Nơi Software Engineering gặp AI',
          paragraphs: [
            'Cốt lõi của tôi vẫn là một Software Engineer. Mối quan tâm lớn nhất của tôi là Backend: xây dựng hệ thống đáng tin cậy và viết code rõ ràng, dễ bảo trì. Nghiên cứu giúp tôi hiểu rằng một kỹ sư phần mềm có kiến thức về cách AI hoạt động sẽ cộng tác liên ngành hiệu quả hơn và đưa ra quyết định tốt hơn khi tích hợp các khả năng thông minh.',
            'Tôi không còn chỉ nhìn AI như một mối đe dọa. Đây là một công cụ mạnh mẽ nhưng vẫn cần khả năng phán đoán, bối cảnh và tư duy kỹ thuật có trách nhiệm. Nghiên cứu dạy tôi đọc tài liệu phức tạp, tiếp cận điều chưa chắc chắn có phương pháp và đặt câu hỏi tốt hơn.',
            'Tôi biết ơn những người bạn và người hướng dẫn đã cho tôi cơ hội học cùng họ. Tôi hiểu rằng để đóng góp, không nhất thiết phải là người giỏi nhất trong phòng; điều quan trọng là sẵn sàng đối diện với điều chưa biết, đặt câu hỏi và tiếp tục tiến về phía trước.',
          ],
        },
      ],
    },
  },
];
