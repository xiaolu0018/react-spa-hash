var zoneData = [
  { text: "北京", items: [{ text: "北京", value: 904 }], value: 35 },
  { text: "上海", items: [{ text: "上海", value: 905 }], value: 36 },
  { text: "天津", items: [{ text: "天津", value: 903 }], value: 37 },
  { text: "重庆", items: [{ text: "重庆", value: 906 }], value: 38 },
  {
    text: "广东",
    items: [
      { text: "江门", value: 558 },
      { text: "中山", value: 557 },
      { text: "东莞", value: 556 },
      { text: "汕尾", value: 555 },
      { text: "茂名", value: 562 },
      { text: "湛江", value: 561 },
      { text: "阳江", value: 560 },
      { text: "佛山", value: 559 },
      { text: "揭阳", value: 566 },
      { text: "潮州", value: 565 },
      { text: "清远", value: 564 },
      { text: "肇庆", value: 563 },
      { text: "云浮", value: 567 },
      { text: "广州", value: 547 },
      { text: "深圳", value: 548 },
      { text: "珠海", value: 549 },
      { text: "汕头", value: 550 },
      { text: "韶关", value: 551 },
      { text: "河源", value: 552 },
      { text: "梅州", value: 553 },
      { text: "惠州", value: 554 }
    ],
    value: 39
  },
  {
    text: "福建",
    items: [
      { text: "漳州", value: 573 },
      { text: "南平", value: 574 },
      { text: "莆田", value: 571 },
      { text: "泉州", value: 572 },
      { text: "龙岩", value: 575 },
      { text: "宁德", value: 576 },
      { text: "三明", value: 570 },
      { text: "厦门", value: 569 },
      { text: "福州", value: 568 }
    ],
    value: 40
  },
  {
    text: "浙江",
    items: [
      { text: "杭州", value: 577 },
      { text: "丽水", value: 587 },
      { text: "宁波", value: 578 },
      { text: "湖州", value: 581 },
      { text: "绍兴", value: 582 },
      { text: "温州", value: 579 },
      { text: "嘉兴", value: 580 },
      { text: "舟山", value: 585 },
      { text: "台州", value: 586 },
      { text: "金华", value: 583 },
      { text: "衢州", value: 584 }
    ],
    value: 41
  },
  {
    text: "江苏",
    items: [
      { text: "镇江", value: 592 },
      { text: "常州", value: 591 },
      { text: "扬州", value: 594 },
      { text: "南通", value: 593 },
      { text: "南京", value: 588 },
      { text: "苏州", value: 590 },
      { text: "无锡", value: 589 },
      { text: "泰州", value: 600 },
      { text: "连云港", value: 599 },
      { text: "徐州", value: 596 },
      { text: "盐城", value: 595 },
      { text: "淮安", value: 598 },
      { text: "宿迁", value: 597 }
    ],
    value: 42
  },
  {
    text: "山东",
    items: [
      { text: "青岛", value: 602 },
      { text: "济南", value: 601 },
      { text: "烟台", value: 607 },
      { text: "威海", value: 608 },
      { text: "济宁", value: 609 },
      { text: "泰安", value: 610 },
      { text: "淄博", value: 603 },
      { text: "枣庄", value: 604 },
      { text: "东营", value: 605 },
      { text: "潍坊", value: 606 },
      { text: "聊城", value: 615 },
      { text: "滨州", value: 616 },
      { text: "菏泽", value: 617 },
      { text: "日照", value: 611 },
      { text: "莱芜", value: 612 },
      { text: "德州", value: 613 },
      { text: "临沂", value: 614 }
    ],
    value: 43
  },
  {
    text: "辽宁",
    items: [
      { text: "营口", value: 626 },
      { text: "葫芦岛", value: 625 },
      { text: "锦州", value: 624 },
      { text: "丹东", value: 623 },
      { text: "本溪", value: 622 },
      { text: "抚顺", value: 621 },
      { text: "鞍山", value: 620 },
      { text: "大连", value: 619 },
      { text: "朝阳", value: 631 },
      { text: "铁岭", value: 630 },
      { text: "辽阳", value: 629 },
      { text: "阜新", value: 628 },
      { text: "盘锦", value: 627 },
      { text: "沈阳", value: 618 }
    ],
    value: 44
  },
  {
    text: "江西",
    items: [
      { text: "抚州", value: 641 },
      { text: "上饶", value: 642 },
      { text: "吉安", value: 639 },
      { text: "宜春", value: 640 },
      { text: "鹰潭", value: 637 },
      { text: "赣州", value: 638 },
      { text: "新余", value: 635 },
      { text: "九江", value: 636 },
      { text: "萍乡", value: 634 },
      { text: "景德镇", value: 633 },
      { text: "南昌", value: 632 }
    ],
    value: 45
  },
  {
    text: "四川",
    items: [
      { text: "西昌(凉山州)", value: 907 },
      { text: "阿坝州(马尔康)", value: 661 },
      { text: "甘孜州(康定)", value: 662 },
      { text: "眉山", value: 659 },
      { text: "广元", value: 649 },
      { text: "南充", value: 653 },
      { text: "遂宁", value: 650 },
      { text: "宜宾", value: 654 },
      { text: "德阳", value: 647 },
      { text: "内江", value: 651 },
      { text: "绵阳", value: 648 },
      { text: "乐山", value: 652 },
      { text: "巴中", value: 657 },
      { text: "攀枝花", value: 645 },
      { text: "雅安", value: 658 },
      { text: "泸州", value: 646 },
      { text: "成都(资阳)", value: 643 },
      { text: "广安", value: 655 },
      { text: "达州", value: 656 },
      { text: "自贡", value: 644 }
    ],
    value: 46
  },
  {
    text: "陕西",
    items: [
      { text: "铜川", value: 665 },
      { text: "宝鸡", value: 666 },
      { text: "西安(咸阳)", value: 664 },
      { text: "汉中", value: 670 },
      { text: "延安", value: 669 },
      { text: "渭南", value: 668 },
      { text: "商洛", value: 673 },
      { text: "安康", value: 672 },
      { text: "榆林", value: 671 }
    ],
    value: 47
  },
  {
    text: "湖北",
    items: [
      { text: "荆州", value: 678 },
      { text: "十堰", value: 677 },
      { text: "襄阳(襄樊)", value: 676 },
      { text: "黄石", value: 675 },
      { text: "孝感", value: 682 },
      { text: "鄂州", value: 681 },
      { text: "荆门", value: 680 },
      { text: "宜昌", value: 679 },
      { text: "武汉", value: 674 },
      { text: "黄冈", value: 683 },
      { text: "咸宁", value: 684 },
      { text: "随州", value: 685 },
      { text: "仙桃", value: 686 },
      { text: "天门", value: 687 },
      { text: "潜江", value: 688 },
      { text: "神农架", value: 689 },
      { text: "恩施州", value: 690 }
    ],
    value: 48
  },
  {
    text: "河南",
    items: [
      { text: "济源", value: 708 },
      { text: "驻马店", value: 707 },
      { text: "许昌", value: 700 },
      { text: "濮阳", value: 699 },
      { text: "三门峡", value: 702 },
      { text: "漯河", value: 701 },
      { text: "商丘", value: 704 },
      { text: "南阳", value: 703 },
      { text: "周口", value: 706 },
      { text: "信阳", value: 705 },
      { text: "郑州", value: 691 },
      { text: "开封", value: 692 },
      { text: "洛阳", value: 693 },
      { text: "平顶山", value: 694 },
      { text: "焦作", value: 695 },
      { text: "鹤壁", value: 696 },
      { text: "新乡", value: 697 },
      { text: "安阳", value: 698 }
    ],
    value: 49
  },
  {
    text: "河北",
    items: [
      { text: "唐山", value: 710 },
      { text: "石家庄", value: 709 },
      { text: "邯郸", value: 712 },
      { text: "秦皇岛", value: 711 },
      { text: "保定", value: 714 },
      { text: "邢台", value: 713 },
      { text: "衡水", value: 719 },
      { text: "沧州", value: 717 },
      { text: "廊坊", value: 718 },
      { text: "张家口", value: 715 },
      { text: "承德", value: 716 }
    ],
    value: 50
  },
  {
    text: "山西",
    items: [
      { text: "运城", value: 729 },
      { text: "吕梁", value: 730 },
      { text: "忻州", value: 727 },
      { text: "临汾", value: 728 },
      { text: "朔州", value: 725 },
      { text: "晋中", value: 726 },
      { text: "长治", value: 723 },
      { text: "晋城", value: 724 },
      { text: "大同", value: 721 },
      { text: "阳泉", value: 722 },
      { text: "太原", value: 720 }
    ],
    value: 51
  },
  {
    text: "内蒙古",
    items: [
      { text: "兴安盟", value: 742 },
      { text: "阿拉善盟", value: 741 },
      { text: "巴彦淖尔", value: 740 },
      { text: "呼伦贝尔", value: 739 },
      { text: "锡林郭勒", value: 738 },
      { text: "乌兰察布", value: 737 },
      { text: "鄂尔多斯", value: 736 },
      { text: "通辽", value: 735 },
      { text: "赤峰", value: 734 },
      { text: "乌海", value: 733 },
      { text: "包头", value: 732 },
      { text: "呼和浩特", value: 731 }
    ],
    value: 52
  },
  {
    text: "吉林",
    items: [
      { text: "辽源", value: 746 },
      { text: "四平", value: 745 },
      { text: "吉林", value: 744 },
      { text: "长春", value: 743 },
      { text: "延边州", value: 751 },
      { text: "通化", value: 747 },
      { text: "白山", value: 748 },
      { text: "松原", value: 749 },
      { text: "白城", value: 750 }
    ],
    value: 53
  },
  {
    text: "黑龙江",
    items: [
      { text: "大兴安岭", value: 764 },
      { text: "绥化", value: 763 },
      { text: "牡丹江", value: 759 },
      { text: "佳木斯", value: 760 },
      { text: "七台河", value: 761 },
      { text: "黑河", value: 762 },
      { text: "双鸭山", value: 755 },
      { text: "鸡西", value: 756 },
      { text: "大庆", value: 757 },
      { text: "伊春", value: 758 },
      { text: "哈尔滨", value: 752 },
      { text: "齐齐哈尔", value: 753 },
      { text: "鹤岗", value: 754 }
    ],
    value: 54
  },
  {
    text: "安徽",
    items: [
      { text: "宿州", value: 776 },
      { text: "阜阳", value: 775 },
      { text: "六安", value: 778 },
      { text: "巢湖", value: 777 },
      { text: "安庆", value: 772 },
      { text: "铜陵", value: 771 },
      { text: "滁州", value: 774 },
      { text: "黄山", value: 773 },
      { text: "淮南", value: 768 },
      { text: "蚌埠", value: 767 },
      { text: "淮北", value: 770 },
      { text: "马鞍山", value: 769 },
      { text: "芜湖", value: 766 },
      { text: "合肥", value: 765 },
      { text: "池州", value: 781 },
      { text: "宣城", value: 780 },
      { text: "亳州", value: 779 }
    ],
    value: 55
  },
  {
    text: "湖南",
    items: [
      { text: "湘西州", value: 795 },
      { text: "长沙", value: 782 },
      { text: "邵阳", value: 786 },
      { text: "衡阳", value: 785 },
      { text: "湘潭", value: 784 },
      { text: "株州", value: 783 },
      { text: "益阳", value: 790 },
      { text: "张家界", value: 789 },
      { text: "常德", value: 788 },
      { text: "岳阳", value: 787 },
      { text: "娄底", value: 794 },
      { text: "怀化", value: 793 },
      { text: "永州", value: 792 },
      { text: "郴州", value: 791 }
    ],
    value: 56
  },
  {
    text: "广西",
    items: [
      { text: "柳州", value: 797 },
      { text: "桂林", value: 798 },
      { text: "南宁(崇左)", value: 796 },
      { text: "防城港", value: 801 },
      { text: "钦州", value: 802 },
      { text: "梧州", value: 799 },
      { text: "北海", value: 800 },
      { text: "贵港", value: 803 },
      { text: "玉林", value: 804 },
      { text: "河池", value: 809 },
      { text: "来宾", value: 908 },
      { text: "贺州", value: 807 },
      { text: "百色", value: 808 }
    ],
    value: 57
  },
  {
    text: "海南",
    items: [
      { text: "保亭", value: 827 },
      { text: "琼中", value: 828 },
      { text: "海口", value: 810 },
      { text: "西南中沙群岛", value: 910 },
      { text: "五指山", value: 812 },
      { text: "三亚", value: 811 },
      { text: "儋州", value: 814 },
      { text: "琼海", value: 813 },
      { text: "文昌", value: 816 },
      { text: "琼山", value: 815 },
      { text: "东方", value: 818 },
      { text: "万宁", value: 817 },
      { text: "定安", value: 820 },
      { text: "澄迈", value: 819 },
      { text: "临高", value: 822 },
      { text: "屯昌", value: 821 },
      { text: "昌江", value: 824 },
      { text: "白沙", value: 823 },
      { text: "陵水", value: 826 },
      { text: "乐东", value: 825 }
    ],
    value: 58
  },
  {
    text: "云南",
    items: [
      { text: "昆明", value: 829 },
      { text: "曲靖", value: 830 },
      { text: "玉溪", value: 831 },
      { text: "保山", value: 832 },
      { text: "昭通", value: 833 },
      { text: "普洱(思茅)", value: 834 },
      { text: "临沧", value: 835 },
      { text: "丽江", value: 836 },
      { text: "文山州", value: 837 },
      { text: "红河州", value: 838 },
      { text: "景洪（西双版纳）", value: 839 },
      { text: "楚雄州", value: 840 },
      { text: "大理州", value: 841 },
      { text: "德宏州", value: 842 },
      { text: "迪庆州(香格里拉)", value: 844 },
      { text: "怒江州", value: 843 }
    ],
    value: 59
  },
  {
    text: "贵州",
    items: [
      { text: "毕节", value: 850 },
      { text: "铜仁", value: 849 },
      { text: "安顺", value: 848 },
      { text: "遵义", value: 847 },
      { text: "六盘水", value: 846 },
      { text: "贵阳", value: 845 },
      { text: "黔南州(都匀)", value: 853 },
      { text: "黔东南州(凯里)", value: 852 },
      { text: "黔西南州(兴义)", value: 851 }
    ],
    value: 60
  },
  {
    text: "西藏",
    items: [
      { text: "阿里", value: 859 },
      { text: "林芝", value: 860 },
      { text: "日喀则", value: 858 },
      { text: "山南", value: 857 },
      { text: "昌都", value: 856 },
      { text: "那曲", value: 855 },
      { text: "拉萨", value: 854 }
    ],
    value: 61
  },
  {
    text: "甘肃",
    items: [
      { text: "武威", value: 866 },
      { text: "白银", value: 863 },
      { text: "天水", value: 864 },
      { text: "兰州", value: 861 },
      { text: "金昌", value: 862 },
      { text: "甘南州", value: 873 },
      { text: "临夏州", value: 874 },
      { text: "张掖", value: 871 },
      { text: "酒泉(嘉峪关)", value: 872 },
      { text: "庆阳", value: 869 },
      { text: "陇南", value: 870 },
      { text: "定西", value: 867 },
      { text: "平凉", value: 868 }
    ],
    value: 62
  },
  {
    text: "宁夏",
    items: [
      { text: "石嘴山", value: 876 },
      { text: "银川", value: 875 },
      { text: "固原", value: 878 },
      { text: "吴忠", value: 877 },
      { text: "中卫", value: 911 }
    ],
    value: 63
  },
  {
    text: "青海",
    items: [
      { text: "海东", value: 880 },
      { text: "西宁", value: 879 },
      { text: "黄南州", value: 882 },
      { text: "海北州", value: 881 },
      { text: "果洛州", value: 884 },
      { text: "海南州", value: 883 },
      { text: "海西州", value: 886 },
      { text: "玉树州", value: 885 }
    ],
    value: 64
  },
  {
    text: "新疆",
    items: [
      { text: "克孜勒苏", value: 895 },
      { text: "巴音郭楞", value: 896 },
      { text: "昌吉州", value: 897 },
      { text: "博尔塔拉", value: 898 },
      { text: "图木舒克", value: 915 },
      { text: "哈密", value: 891 },
      { text: "五家渠", value: 916 },
      { text: "和田", value: 892 },
      { text: "阿克苏", value: 893 },
      { text: "喀什", value: 894 },
      { text: "塔城", value: 912 },
      { text: "阿勒泰", value: 913 },
      { text: "阿拉尔", value: 914 },
      { text: "伊犁州", value: 899 },
      { text: "克拉玛依", value: 888 },
      { text: "乌鲁木齐", value: 887 },
      { text: "吐鲁番", value: 890 },
      { text: "石河子", value: 889 }
    ],
    value: 65
  },
  { text: "香港", items: [{ text: "香港", value: 900 }], value: 66 },
  { text: "澳门", items: [{ text: "澳门", value: 901 }], value: 67 },
  { text: "台湾", items: [{ text: "台湾", value: 902 }], value: 68 }
];
export default zoneData;
