package com.example.demo.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Controller
public class ApiController {

    @Autowired
    private ApiService apiService;

    @GetMapping("/")
    public String index() {
        return "ApiInput";
    }

    @GetMapping("/api/data")
    public String getDataFromApi(
            @RequestParam("lawdCd") String lawdCd,
            @RequestParam("dealYmd") String dealYmd,
            @RequestParam("dong") String dong,
            @RequestParam("aptName") String aptName,
            Model model) {

        List<HashMap<String, Object>> itemList = apiService.getDataFromApi(lawdCd, dealYmd);
        List<HashMap<String, Object>> filteredItemList = filterItemList(itemList, dong, aptName);

        model.addAttribute("itemList", filteredItemList);

        return "ApiResult";
    }

    private List<HashMap<String, Object>> filterItemList(List<HashMap<String, Object>> itemList, String dong, String aptName) {
        List<HashMap<String, Object>> filteredItemList = new ArrayList<>();

        for (HashMap<String, Object> item : itemList) {
            String itemDong = ((String) item.get("법정동")).trim();
            String itemAptName = (String) item.get("아파트");

            if ("".equals(aptName) && dong.equals(itemDong)) {
                filteredItemList.add(createHashMap(item));
            } else if (dong.equals(itemDong) && aptName.equals(itemAptName)) {
                filteredItemList.add(createHashMap(item));
            }
        }

        return filteredItemList;
    }

    private HashMap<String, Object> createHashMap(HashMap<String, Object> item) {
        HashMap<String, Object> map = new HashMap<>();
        map.put("거래금액", item.get("거래금액"));
        map.put("층", item.get("층"));
        map.put("지역코드", item.get("지역코드"));
        map.put("아파트", item.get("아파트"));
        map.put("법정동", item.get("법정동"));
        map.put("년", item.get("년"));
        map.put("월", item.get("월"));
        map.put("일", item.get("일"));
        return map;
    }
}
