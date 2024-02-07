import React from "react";
import MainBox from "../../components/mainBox/MainBox";
import ChartLine from "../../components/charts/ChartLine";
import ProgressLine from "../../components/charts/ProgressLine";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home_section my-[12px] mx-[10px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px] mb-[25px]">
        <MainBox title={t("Subscribers")}>
          <div class="items">
            <div class="item">
              <div class="text">
                <div class="icon">
                  <i class="fa-solid fa-people-group"></i>
                </div>
                <h4>{"Number of subscribers"}</h4>
              </div>
              <div class="num">4</div>
            </div>
            <div class="item">
              <div class="text">
                <div class="icon">
                  <i class="fa-regular fa-address-book"></i>
                </div>
                <h4>{"Callers"}</h4>
              </div>
              <div class="num">4</div>
            </div>
            <div class="item">
              <div class="text">
                <div class="icon">
                  <i class="fa-solid fa-people-line"></i>
                </div>
                <h4>{"Almost finished"}</h4>
              </div>
              <div class="num">4</div>
            </div>
            <div class="item">
              <div class="text">
                <div class="icon">
                  <i class="fa-solid fa-people-roof"></i>
                </div>
                <h4>{"Active subscribers"}</h4>
              </div>
              <div class="num">0</div>
            </div>
            <div class="item">
              <div class="text">
                <div class="icon">
                  <i class="fa-solid fa-person-falling"></i>
                </div>
                <h4>{"Their subscription has expired"}</h4>
              </div>
              <div class="num">3</div>
            </div>
            <div class="item">
              <div class="text">
                <div class="icon">
                  <i class="fa-solid fa-users-slash"></i>
                </div>
                <h4>{"Their subscription ends"}</h4>
              </div>
              <div class="num">1</div>
            </div>
            <div class="item">
              <div class="text">
                <div class="icon">
                  <i class="fa-solid fa-person-military-pointing"></i>
                </div>
                <h4>{"Managers"}</h4>
              </div>
              <div class="num">5</div>
            </div>
            <div class="item">
              <div class="text">
                <div class="icon">
                  <i class="fa-solid fa-signal"></i>
                </div>
                <h4>{"Online FUP"}</h4>
              </div>
              <div class="num">10</div>
            </div>
          </div>
        </MainBox>
        <MainBox title={t("Callers")}>
          <div className="h-[380px]">
            <ChartLine />
          </div>
        </MainBox>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mb-[25px]">
        <MainBox title={t("Financial accounts")}>
          <div class="items">
            <div class="item">
              <div class="text">
                <div class="icon">
                  <i class="fa-solid fa-money-check-dollar"></i>
                </div>
                <h4>{t("Balance")}</h4>
              </div>
              <div class="num">$ -2,011,721.00</div>
            </div>
            <div class="item">
              <div class="text">
                <div class="icon">
                  <i class="fa-solid fa-braille"></i>
                </div>
                <h4>{t("Encouraging points")}</h4>
              </div>
              <div class="num">0</div>
            </div>
            <div class="item">
              <div class="text">
                <div class="icon">
                  <i class="fa-solid fa-fire"></i>
                </div>
                <h4>{t("Activities today")}</h4>
              </div>
              <div class="num">10</div>
            </div>
            <div class="item">
              <div class="text">
                <div class="icon">
                  <i class="fa-solid fa-cash-register"></i>
                </div>
                <h4>{t("For new registrations")}</h4>
              </div>
              <div class="num">9</div>
            </div>
            <div class="item">
              <div class="text">
                <div class="icon">
                  <i class="fa-solid fa-wallet"></i>
                </div>
                <h4>{t("Debts owed")}</h4>
              </div>
              <div class="num">$ 0.00</div>
            </div>
            <div class="item">
              <div class="text">
                <div class="icon">
                  <i class="fa-solid fa-receipt"></i>
                </div>
                <h4>{t("Financial Claims")}</h4>
              </div>
              <div class="num">$ 0.00</div>
            </div>
          </div>
        </MainBox>
        <MainBox title={t("System Status")}>
          <div class="items">
            <div class="item">
              <div class="text">
                <div class="icon">
                  <i class="fa-solid fa-business-time"></i>
                </div>
                <h4>{t("System operating time")}</h4>
              </div>
              <div class="num">575 days 16 hours 11 min</div>
            </div>
            <div class="item">
              <div class="text">
                <div class="icon">
                  <i class="fa-regular fa-hard-drive"></i>
                </div>
                <h4>{t("Backup Storage")}</h4>
              </div>
              <div class="num">None, using system disk</div>
            </div>
            <div class="item">
              <div class="text">
                <div class="icon">
                  <i class="fa-solid fa-server"></i>
                </div>
                <h4>{t("Network Status")}</h4>
              </div>
              <div class="num">Internet Reachable</div>
            </div>
            <div class="item">
              <div class="text">
                <div class="icon">
                  <i class="fa-solid fa-database"></i>
                </div>
                <h4>{t("Database time")}</h4>
              </div>
              <div class="num">2023-09-03 15:22:21</div>
            </div>
            <div class="item">
              <div class="text">
                <div class="icon">
                  <i class="fa-solid fa-chart-area"></i>
                </div>
                <h4>{t("Region")}</h4>
              </div>
              <div class="num">Asia/Baghdad</div>
            </div>
            <div class="item">
              <div class="text">
                <div class="icon">
                  <i class="fa-regular fa-id-card"></i>
                </div>
                <h4>{t("System License")}</h4>
              </div>
              <div class="num">active</div>
            </div>
          </div>
        </MainBox>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        <MainBox title={t("Processor")}>
          <div className="w-[300px] h-[300px] mx-auto">
            <ProgressLine />
          </div>
        </MainBox>
        <MainBox title={t("Random Memory")}>
          <div className="w-[300px] h-[300px] mx-auto">
            <ProgressLine />
          </div>
        </MainBox>
        <MainBox title={t("Storage unit")}>
          <div className="w-[300px] h-[300px] mx-auto">
            <ProgressLine />
          </div>
        </MainBox>
      </div>
    </div>
  );
};

export default Home;
